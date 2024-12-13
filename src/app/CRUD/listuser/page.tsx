'use client';

import { useState, useEffect } from 'react';
import InputSearch from '@/components/InputSearch';
import { useUsers } from '@/lib/hooks/useUsers'; // Assuming your useUsers hook is in the hooks folder
import { parseISO, format } from 'date-fns';
import { useDeleteUser } from '@/lib/hooks/useDeleteUser';
import { useEditUser } from '@/lib/hooks/useEditUser';
import { useRouter } from 'next/navigation'; // Import useRouter to navigate

interface UserProps {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
  role: string;
}

export default function UserList() {
  const router = useRouter(); // For navigation
  const { users, loading, error } = useUsers(); // Fetch data using the custom hook
  const { loading: deleteLoading, error: deleteError, deleteUserById } = useDeleteUser(); // Delete user hook
  const { loading: editLoading, error: editError, editUser: editUserApi } = useEditUser(); // Edit user hook
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<UserProps[]>(users);
  const [sortConfig, setSortConfig] = useState<{ key: keyof UserProps; direction: 'asc' | 'desc' }>({ key: 'name', direction: 'asc' });

  // State for handling editing
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editUser, setEditUser] = useState<UserProps | null>(null);

  // Filter users based on the search term
  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  // Handle sorting
  const handleSort = (key: keyof UserProps) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedUsers = [...filteredUsers].sort((a, b) => {
      if (key === 'created_at' || key === 'updated_at') {
        const dateA = new Date(a[key]);
        const dateB = new Date(b[key]);
        return direction === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
      }

      if (a[key] < b[key]) {
        return direction === 'asc' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    setFilteredUsers(sortedUsers);
  };

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      try {
        await deleteUserById(id); // Call delete user hook
        setFilteredUsers((prev) => prev.filter((user) => user.id !== id)); // Update the filtered users state
      } catch (err) {
        console.error('Error deleting user', err);
      }
    }
  };

  const handleEdit = (user: UserProps) => {
    setIsEditing(true);
    setEditUser(user);
  };

  const handleSaveEdit = async () => {
    if (editUser) {
      const confirmSave = window.confirm('Are you sure you want to save the changes?');
      if (confirmSave) {
        try {
          await editUserApi(editUser); // Call the useEditUser hook to update the user on the server
          setFilteredUsers((prev) =>
            prev.map((user) => (user.id === editUser.id ? { ...user, ...editUser } : user))
          ); // Update the filtered users state with the new user data
          setIsEditing(false);
          setEditUser(null);
        } catch (err) {
          console.error('Error updating user', err);
        }
      }
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditUser(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editUser) {
      setEditUser({
        ...editUser,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Back Button Handler
  const handleBack = () => {
    router.back();  // Go back to the previous page
  };

  return (
    <div className="mt-[24px] flex flex-col gap-[24px] mobileSmall:max-md:flex mobileSmall:max-md:h-screen">
      {/* Back Button */}
      <div className="flex justify-start mb-4">
        <button
          onClick={handleBack}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
        >
          Back
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          {/* Search Box */}
          <div className="flex justify-center items-center mb-4 md:block">
            <InputSearch value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>

          {/* Table */}
          <div className="w-full border-2 border-collapse">
            {/* Table Header */}
            <div className="grid grid-cols-7 border-b-2 border-[#EAEAEA]">
              <div className="w-[58px] h-[50px] pl-[5.5rem] py-2">ID</div>
              <div className="w-[60px] py-2">Profile</div>
              <div className="w-[428px] ml-[-3rem] py-2 text-left cursor-pointer" onClick={() => handleSort('name')}>
                Name {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? '⬆️' : '⬇️')}
              </div>
              <div className="w-[232px] ml-[-4rem] py-2 text-left cursor-pointer" onClick={() => handleSort('email')}>
                Email {sortConfig.key === 'email' && (sortConfig.direction === 'asc' ? '⬆️' : '⬇️')}
              </div>
              <div className="w-[198px] ml-[-3rem] py-2 text-left cursor-pointer" onClick={() => handleSort('created_at')}>
                Date Created {sortConfig.key === 'created_at' && (sortConfig.direction === 'asc' ? '⬆️' : '⬇️')}
              </div>
              <div className="w-[302px] ml-[-6rem] py-2 text-left cursor-pointer" onClick={() => handleSort('updated_at')}>
                Date Updated {sortConfig.key === 'updated_at' && (sortConfig.direction === 'asc' ? '⬆️' : '⬇️')}
              </div>
              <div className="w-[230px] ml-[-9rem] py-2 text-left">Role</div>
            </div>

            {/* Table Body */}
            <div>
              {filteredUsers.map((user) => {
                return (
                  <div key={user.id} className="grid grid-cols-8 border-b-[1px] border-[#EAEAEA]-300 text-center text-[#6C757D]">
                    <div className="px-4 py-2">{user.id}</div>
                    <div className="px-4 py-2 flex items-center justify-center">
                      <div className="w-[40px] h-[40px] ml-[-6rem] bg-slate-50 rounded-full flex items-center justify-center">👤</div>
                    </div>
                    <div className="py-2 text-left">{user.name}</div>
                    <div className="ml-[-2.5rem] py-2 text-left">{user.email}</div>
                    <div className="pl-[2rem] py-2 text-left">{user.created_at}</div>
                    <div className="px-4 py-2 text-left">{user.updated_at}</div>
                    <div className="px-4 py-2 text-left">{user.role}</div>
                    <div className="px-4 py-2 text-left">
                      <button className="bg-blue-500 text-white rounded px-2 py-1 mr-2" onClick={() => handleEdit(user)}>
                        Edit
                      </button>
                      <button className="bg-red-500 text-white rounded px-2 py-1" onClick={() => handleDelete(user.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* Edit Modal */}
      {isEditing && editUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl mb-4">Edit User</h2>
            <div className="mb-4">
              <label className="block">Name</label>
              <input
                type="text"
                name="name"
                value={editUser.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block">Email</label>
              <input
                type="email"
                name="email"
                value={editUser.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block">Role</label>
              <input
                type="text"
                name="role"
                value={editUser.role}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex justify-between">
              <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleSaveEdit}>
                Save Changes
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={handleCancelEdit}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { useState } from 'react';
import { deleteUser } from '@/lib/api/users';

export function useDeleteUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteUserById = async (id: number) => {
    setLoading(true);
    setError(null);

    try {
      await deleteUser(id);
      console.log('User deleted successfully');
    } catch (err) {
      setError('Failed to delete user');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    deleteUserById,
  };
}

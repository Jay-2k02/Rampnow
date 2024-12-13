import { fetchUsers } from '@/lib/api/users';
import { useState, useEffect } from 'react';
import { User } from '@/types';

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]); // Specify the type as User[]
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadUsers() {
      try {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers); // No error now
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  return { users, loading, error };
}

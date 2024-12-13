import { useState } from 'react';
import { updateUser } from '@/lib/api/users';
import { User } from '@/types';

export function useEditUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const editUser = async (user: User) => {
    setLoading(true);
    setError(null);

    try {
      await updateUser(user);
      console.log('User edited successfully');
    } catch (err) {
      setError('Failed to update user');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    editUser,
  };
}

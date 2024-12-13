import { useState, useEffect } from 'react';
import { getToken, setToken, clearToken } from '@/lib/auth'; // Import helper functions

export const useAuth = () => {
  const [token, setTokenState] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = getToken();  // Fetch the token from cookies or localStorage
    if (storedToken) {
      setTokenState(storedToken);  // Set the token if available
    }
  }, []);

  const login = (token: string) => {
    setToken(token);  // Save token in cookies/localStorage
    setTokenState(token);  // Update state
  };

  const logout = () => {
    clearToken();  // Clear token from cookies and localStorage
    setTokenState(null);  // Clear state
  };

  return {
    token,
    login,
    logout,
  };
};

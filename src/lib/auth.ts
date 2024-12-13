// /lib/auth.ts

// This function is now unnecessary as we generate the token in the API route
// export const generateToken = (): string => {
//   return 'mocked-jwt-token'; // Remove this function
// };

export const setToken = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token); // Save in localStorage
    // Save token in cookies for use in middleware
    document.cookie = `token=${token}; path=/; secure; SameSite=Strict`; 
  }
};

export const getToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token'); // Retrieve from localStorage
  }
  return null;
};

export const clearToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token'); // Remove from localStorage
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'; // Clear cookie
  }
};

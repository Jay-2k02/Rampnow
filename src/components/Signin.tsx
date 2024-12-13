'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { setToken } from '@/lib/auth'; // Assuming setToken is correctly implemented

const LogIn = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      console.log(response,email,password);
      const data = await response.json();

      if (response.ok) {
        const token = data.token;
        setToken(token); // Save the token in cookies and localStorage
        router.push('/CRUD'); // Redirect to CRUD page
      } else {
        setError(data.error || 'Invalid credentials. Please try again.');
      }
    } catch (err) {
      setError('An error occurred while logging in.');
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-5 max-w-lg shadow-2xl shadow-gray-900 py-8 bg-white mx-auto rounded-md text-gray-900"
      >
        <h3 className="text-2xl">Log In to Get Started</h3>

        <div className="flex flex-col items-center gap-6">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pl-2">
              Username
            </span>
            <input
              required
              type="text"
              name="email"
              className="mt-1 px-3 py-4 w-[350px] md:w-[450px] bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
              placeholder="Enter your username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pl-2">
              Password
            </span>
            <input
              required
              type="password"
              name="password"
              className="mt-1 w-[350px] md:w-[450px] px-3 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          className="bg-[#53c28b] text-white rounded-md p-[15px] w-[90%]"
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;

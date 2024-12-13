'use client'
import { useState } from "react";
import { useRouter } from "next/navigation"; // To redirect
import { createUser } from '@/lib/api/users'; // Import the createUser function
import { User } from '@/types'; // Import the User type

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
  });
  const [loading, setLoading] = useState(false); // To manage loading state
  const [successMessage, setSuccessMessage] = useState(""); // To store success message
  const [errorMessage, setErrorMessage] = useState(""); // To store error message

  const router = useRouter(); // For redirecting

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading state

    try {
      // Call createUser function with the form data
      await createUser(formData as User); 
      setSuccessMessage("User created successfully!");
      setErrorMessage(""); // Reset any error message
      setLoading(false);

      // Redirect to the previous page after 2 seconds
      setTimeout(() => {
        router.back();
      }, 2000); // Wait 2 seconds before redirecting
    } catch (error) {
      setErrorMessage("Error creating user, please try again.");
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-5 max-w-lg shadow-2xl shadow-gray-900 py-8 bg-white mx-auto rounded-md text-gray-900"
      >
        <h3 className="text-2xl ">Create User </h3>

        {/* Success or error message */}
        {successMessage && (
          <div className="text-green-600">{successMessage}</div>
        )}
        {errorMessage && <div className="text-red-600">{errorMessage}</div>}

        <div className="flex flex-col items-center gap-6">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pl-2">
              Name
            </span>
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 px-3 py-4 w-[350px] md:w-[450px] bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
              placeholder="Name"
            />
          </label>

          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pl-2">
              Role
            </span>
            <input
              required
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 w-[350px] md:w-[450px] px-3 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
              placeholder="Role"
            />
          </label>

          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pl-2">
              Email
            </span>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 px-3 py-4 w-[350px] md:w-[450px] bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
              placeholder="Email"
            />
          </label>
        </div>

        <button
          className="bg-[#53c28b] text-white rounded-md p-[15px] w-[90%]"
          type="submit"
          disabled={loading} // Disable button while loading
        >
          {loading ? 'Creating...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

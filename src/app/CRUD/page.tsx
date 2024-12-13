'use client'
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

export default function CRUD() {
  const router = useRouter();

  const handleCreateUser = () => {
    router.push('/CRUD/createuser');
  };

  const handleListUser = () => {
    router.push('/CRUD/listuser');
  };


  return (
    <div>
      <Navbar />
      <main>
        <div className="h-screen flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl p-4">
            <button className='bg-[#000000] text-white rounded-md py-12 px-24 w-full text-4xl' type="button" onClick={handleCreateUser}>
              Create User
            </button>
            <button className='bg-[#53c28b] text-white rounded-md py-12 px-24 w-full text-4xl' type="button" onClick={handleListUser}>
              Manage Users
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

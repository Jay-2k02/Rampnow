'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/lib/hooks/useAuth';

const NavBar = () => {
  const [navbar, setNavbar] = useState<boolean>(false);
  const router = useRouter();
  const isLogin = usePathname() === "/";
  const isCRUD = usePathname() === "/CRUD";
  const { logout } = useAuth();  // Destructure the logout function


  // Logout handler function
  const handleLogout = () => {
    logout();
    router.push('/');  // Redirect to the homepage (or login page as needed)
  };

  return (
    <div>
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <div className="flex items-center">
                  <Image
                    src="/images/logo.png" // path to the logo image inside the 'public/images' folder
                    width={100} // adjust width
                    height={100} // adjust height
                    alt="Logo"
                    className="text-cyan-600 font-bold"
                  />
                </div>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="Close menu" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="Open menu"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    {isLogin? 'About' : ''}
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    {isLogin? 'Blogs' : ''}
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    {isLogin? 'Contact' : ''}
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    {isLogin? 'Projects' : ''}
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#help" onClick={() => setNavbar(!navbar)}>
                    {isCRUD? 'Help' : ''}
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <button
                    className="w-full text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent"
                    onClick={handleLogout}
                  >
                    {isCRUD ? 'Logout' : ''}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

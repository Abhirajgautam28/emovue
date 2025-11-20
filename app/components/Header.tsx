'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-gray-800 p-4 shadow-md">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-extrabold text-white tracking-wider">
          MyApp
        </Link>
        <div>
          {session ? (
            <div className="flex items-center space-x-4">
              <Link href="/chat" className="text-gray-300 hover:text-white transition-colors duration-300">
                Chat
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-300 hover:text-white transition-colors duration-300">
                Login
              </Link>
              <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
                Register
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn('credentials', { email, password, callbackUrl: '/chat' });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-2xl w-96">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Sign In</h1>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            placeholder="you@example.com"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            placeholder="••••••••"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Sign In
          </button>
        </div>
        <p className="text-center text-gray-400">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="font-bold text-blue-500 hover:text-blue-400">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

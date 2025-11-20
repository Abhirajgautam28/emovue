'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the registration logic,
    // like sending the data to your backend.
    console.log('Registering with:', { name, email, password });
    alert('Registration successful! (This is a demo)');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-2xl w-96">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Create your Account</h1>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            placeholder="John Doe"
          />
        </div>
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
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Create Account
          </button>
        </div>
        <p className="text-center text-gray-400">
          Already have an account?{' '}
          <Link href="/login" className="font-bold text-blue-500 hover:text-blue-400">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}

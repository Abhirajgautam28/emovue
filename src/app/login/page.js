'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import FloatingButton from '@/components/ui/FloatingButton';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // For now, we'll just log the credentials and redirect
    console.log({ email, password });
    // Replace this with your actual authentication logic
    if (email && password) {
      router.push('/scan');
    } else {
      setError('Please enter both email and password.');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <GlassCard className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 bg-gray-700 bg-opacity-50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 bg-gray-700 bg-opacity-50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <FloatingButton type="submit" className="mt-4">
            Login
          </FloatingButton>
        </form>
        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <Link href="/register" className="text-purple-400 hover:underline">
            Register
          </Link>
        </p>
      </GlassCard>
    </main>
  );
}

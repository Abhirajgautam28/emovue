'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push('/');
    } else {
      const data = await res.json();
      setError(data.message);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-dark">
      <div className="bg-dark/60 backdrop-blur-md p-8 rounded-2xl shadow-glow w-full max-w-md">
        <h1 className="font-display text-5xl font-bold text-center mb-8 text-primary">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border-b-2 border-primary/50 text-light p-3 focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent border-b-2 border-primary/50 text-light p-3 focus:outline-none focus:border-primary transition-colors"
          />
          <button type="submit" className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-secondary hover:shadow-glow transition-all duration-300 mt-4">
            Login
          </button>
        </form>
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        <p className="text-center mt-6 text-light">
          Don&apos;t have an account?{' '}
          <a href="./register" className="text-primary hover:underline">
            Register
          </a>
        </p>
      </div>
    </main>
  );
}

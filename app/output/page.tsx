'use client';

import { useSearchParams } from 'next/navigation';

export default function OutputPage() {
  const searchParams = useSearchParams();
  const message = searchParams.get('message');

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Output</h1>
        <p className="text-gray-700">{message}</p>
      </div>
    </div>
  );
}

import Link from 'next/link';
import { Suspense } from 'react';
import OutputDisplay from '../components/OutputDisplay';

export default function OutputPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-white">Your Message</h1>
        <Suspense fallback={<div className="text-white">Loading...</div>}>
          <OutputDisplay />
        </Suspense>
        <Link href="/chat" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
          Send Another Message
        </Link>
      </div>
    </div>
  );
}

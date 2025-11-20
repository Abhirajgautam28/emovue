'use client';

import { useSearchParams } from 'next/navigation';

export default function OutputDisplay() {
  const searchParams = useSearchParams();
  const message = searchParams.get('message');

  return (
    <div className="bg-gray-700 p-6 rounded-md mb-6">
      <p className="text-lg text-white whitespace-pre-wrap break-words">{message}</p>
    </div>
  );
}

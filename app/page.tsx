
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to the App</h1>
      <div className="flex gap-4">
        <Link href="/login" className="bg-blue-500 text-white font-bold py-3 px-6 rounded hover:bg-blue-700">
          Login
        </Link>
        <Link href="/register" className="bg-green-500 text-white font-bold py-3 px-6 rounded hover:bg-green-700">
          Register
        </Link>
      </div>
    </div>
  );
}

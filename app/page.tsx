import Link from "next/link";
import dynamic from 'next/dynamic';

const ThreeScene = dynamic(() => import('./components/ThreeScene'), { ssr: false });

export default function Page() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white">
      <ThreeScene />
      <div className="relative z-10 text-center p-8">
        <h1 className="text-6xl font-bold mb-4 animate-fade-in-down">Welcome to Your App</h1>
        <p className="text-xl mb-8 animate-fade-in-up">A beautiful and intuitive user experience starts here.</p>
        <Link href="/login" className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg">
          Get Started
        </Link>
      </div>
    </div>
  );
}

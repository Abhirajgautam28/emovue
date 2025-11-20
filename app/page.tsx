import dynamic from 'next/dynamic';
import { auth, signIn, signOut } from '@/auth';

const ThreeScene = dynamic(() => import('./components/ThreeScene'), { ssr: false });

export default async function Page() {
  const session = await auth();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white">
      <ThreeScene />
      <div className="relative z-10 text-center p-8">
        <h1 className="text-6xl font-bold mb-4 animate-fade-in-down">Welcome to Your App</h1>
        <p className="text-xl mb-8 animate-fade-in-up">A beautiful and intuitive user experience starts here.</p>
        {session ? (
          <div className="flex flex-col items-center">
            <p className="text-lg mb-4">Signed in as {session.user?.name}</p>
            <form
              action={async () => {
                'use server';
                await signOut();
              }}
            >
              <button type="submit" className="bg-white text-red-500 font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Sign Out
              </button>
            </form>
          </div>
        ) : (
          <form
            action={async () => {
              'use server';
              await signIn('github');
            }}
          >
            <button type="submit" className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Sign in with GitHub
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

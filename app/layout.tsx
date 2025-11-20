import { auth } from '@/auth';
import Link from 'next/link';
import { MainNav } from './components/main-nav';
import { UserNav } from './components/user-nav';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-14 items-center">
          <MainNav />
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-4">
              {session ? (
                <UserNav />
              ) : (
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                >
                  Login
                </Link>
              )}
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Button } from '@/app/components/ui/button';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900 text-white">
      <Link href="/" className="flex items-center justify-center">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {session ? (
          <>
            <Link
              href="/chat"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Chat
            </Link>
            <Button onClick={() => signOut()} variant="outline" size="sm">
              Sign Out
            </Button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Login
            </Link>
            <Link href="/register">
              <Button variant="default" size="sm">
                Get Started
              </Button>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

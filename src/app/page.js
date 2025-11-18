import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import FloatingButton from '@/components/ui/FloatingButton';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <GlassCard className="w-full max-w-2xl text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to EmoVue</h1>
        <p className="text-xl text-gray-300 mb-8">
          Real-time emotion analysis from your webcam.
        </p>
        <Link href="/login">
          <FloatingButton>Get Started</FloatingButton>
        </Link>
      </GlassCard>
    </main>
  );
}

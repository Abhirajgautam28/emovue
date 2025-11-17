'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from '@/components/3d/Scene';
import GlassCard from '@/components/ui/GlassCard';
import FloatingButton from '@/components/ui/FloatingButton';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-8 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Scene />
          <OrbitControls 
            autoRotate 
            autoRotateSpeed={0.5} 
            enableZoom={false} 
            enablePan={false} 
            minPolarAngle={Math.PI / 2} 
            maxPolarAngle={Math.PI / 2} 
          />
        </Canvas>
      </div>

      <div className="z-10 flex flex-col items-center text-center">
        <GlassCard className="max-w-4xl">
          <h1 className="text-6xl font-extrabold mb-4">
            Welcome to EmoVue
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover a new way to interact with AI. EmoVue understands your emotions and provides a personalized chat experience.
          </p>
          <FloatingButton onClick={() => router.push('/login')} className="text-lg">
            Get Started
          </FloatingButton>
        </GlassCard>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl w-full">
          <GlassCard>
            <h2 className="text-2xl font-bold mb-3">How It Works</h2>
            <p>EmoVue uses your webcam to analyze your facial expressions in real-time. Our advanced AI then tailors its responses to match your mood, creating a truly empathetic conversation.</p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-bold mb-3">Key Features</h2>
            <ul className="list-disc list-inside text-left">
              <li>Real-time emotion detection</li>
              <li>Personalized AI chat</li>
              <li>Secure and private</li>
              <li>Modern and intuitive design</li>
            </ul>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-bold mb-3">About Us</h2>
            <p>We are a team of passionate developers and designers dedicated to creating innovative and meaningful digital experiences. EmoVue is our latest project, and we hope you enjoy it.</p>
          </GlassCard>
        </div>
      </div>
    </main>
  );
}

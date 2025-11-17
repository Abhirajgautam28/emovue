'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Scene from '@/components/3d/Scene';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import FloatingButton from '@/components/ui/FloatingButton';

function Orb() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#6c3e9a" emissive="#6c3e9a" emissiveIntensity={2} />
    </mesh>
  );
}


export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 relative overflow-hidden">
        <Scene>
          <Stars />
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 0, 5]} intensity={1} />
          <Orb />
          <OrbitControls />
        </Scene>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center"
      >
        <h1 className="text-6xl font-bold">Welcome to EmoWell</h1>
        <p className="text-xl mt-4">Your personalized AI companion for emotional wellness.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="z-10 mt-8"
      >
        <FloatingButton onClick={() => router.push('/login')}>
          Get Started
        </FloatingButton>
      </motion.div>
    </main>
  );
}

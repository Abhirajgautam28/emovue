'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import GlassCard from '../components/ui/GlassCard';
import FuturisticShape from '../components/3d/FuturisticShape';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <FuturisticShape />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-pink-500 to-red-500 opacity-20"></div>
      </motion.div>

      <GlassCard className="z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to EmoWell
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Your personal AI companion for emotional wellness.
        </motion.p>
        <Link href="/login">
          <motion.button
            className="bg-white/20 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-white/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </Link>
      </GlassCard>
    </div>
  );
}

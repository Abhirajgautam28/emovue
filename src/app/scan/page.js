'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import GlassCard from '../../components/ui/GlassCard';

export default function ScanPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <GlassCard>
        <h1 className="text-4xl font-bold mb-8">Mood Scan</h1>
        <div className="w-64 h-64 bg-gray-500 rounded-lg mb-8"></div>
        <Link href="/chat">
          <motion.button
            className="bg-white/20 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-white/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Chat
          </motion.button>
        </Link>
      </GlassCard>
    </div>
  );
}

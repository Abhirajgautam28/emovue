'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../../components/ui/GlassCard';

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // TODO: Add AI response logic
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <GlassCard className="w-full max-w-2xl h-[80vh]">
        <div className="flex flex-col h-full">
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                className={`mb-4 p-4 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500/30 self-end' : 'bg-gray-500/30 self-start'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {msg.text}
              </motion.div>
            ))}
          </div>
          <div className="p-4 flex items-center">
            <input
              type="text"
              className="flex-1 bg-white/20 text-white rounded-full py-3 px-6 focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <motion.button
              className="bg-blue-500/50 text-white font-bold py-3 px-6 rounded-full ml-4 shadow-lg hover:bg-blue-500/70 transition-all duration-300"
              onClick={handleSendMessage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send
            </motion.button>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

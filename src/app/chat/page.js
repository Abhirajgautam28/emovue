'use client';

import { useState } from 'react';
import GlassCard from '@/components/ui/GlassCard';
import FloatingButton from '@/components/ui/FloatingButton';

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await response.json();

    setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <GlassCard className="w-full max-w-2xl h-[70vh] flex flex-col">
        <h1 className="text-4xl font-bold text-center mb-8">Chat with Your AI Companion</h1>
        <div className="flex-grow overflow-y-auto p-4 bg-white/10 rounded-lg">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
            >
              <div
                className={`rounded-lg p-3 ${msg.role === 'user' ? 'bg-blue-500' : 'bg-gray-700'}`}>
                <p>{msg.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-grow bg-white/20 border border-white/30 rounded-l-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FloatingButton onClick={handleSend} className="rounded-l-none">
            Send
          </FloatingButton>
        </div>
      </GlassCard>
    </main>
  );
}

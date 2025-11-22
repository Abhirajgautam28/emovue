'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';

export default function ChatPage() {
  const { data: session } = useSession();
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // In a real application, you would fetch the messages from a database.
    // For this example, we'll just use some dummy data.
    setMessages([
      {
        id: 1,
        text: 'Hello there!',
        user: {
          name: 'Jane Doe',
          image: 'https://github.com/shadcn.png',
        },
      },
      {
        id: 2,
        text: 'Hi! How are you?',
        user: {
          name: 'John Doe',
          image: 'https://github.com/shadcn.png',
        },
      },
    ]);
  }, []);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // In a real application, you would save the message to a database.
    // For this example, we'll just add it to the local state.
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        text: newMessage,
        user: {
          name: session?.user?.name || 'Anonymous',
          image: session?.user?.image || 'https://github.com/shadcn.png',
        },
      },
    ]);

    setNewMessage('');
  };

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-4">
        <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
        <p className="text-lg text-gray-400">You must be logged in to view this page.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800">
        <h1 className="text-xl font-bold">Real-Time Chat</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <Card key={message.id} className="bg-gray-800 border-gray-700">
                <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar>
                        <AvatarImage src={message.user.image} />
                        <AvatarFallback>{message.user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <CardTitle className="text-base font-bold">{message.user.name}</CardTitle>
                        <p className="text-xs text-gray-400">2:14 PM</p>
                    </div>
                </CardHeader>
                <CardContent>
                    <p>{message.text}</p>
                </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <footer className="p-4 border-t border-gray-800">
        <form onSubmit={handleSendMessage} className="flex items-center gap-4">
          <Input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Send</Button>
        </form>
      </footer>
    </div>
  );
}

'use client';

import { useState, useRef, useEffect } from 'react';
import { FiSend, FiUser, FiCpu } from 'react-icons/fi';

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    // Simulate API call and AI response
    setTimeout(() => {
        const aiResponse = `This is a simulated response to: "${input}"`;
        setMessages([...newMessages, { role: 'assistant', content: aiResponse }]);
    }, 1000)

    // TODO: Replace with actual API call
    // const response = await fetch('/api/chat', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ message: input }),
    // });
    // const data = await response.json();
    // setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 bg-dark text-light">
      <div className="bg-dark/60 backdrop-blur-md rounded-2xl shadow-glow w-full max-w-4xl h-[85vh] flex flex-col">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-center p-6 border-b border-primary/20 text-primary">Chat with EmoVue</h1>
        
        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-4 animate-fade-in ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'assistant' && (
                <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center shadow-glow">
                    <FiCpu className="w-6 h-6 text-secondary"/>
                </div>
              )}
              <div className={`max-w-md lg:max-w-lg p-4 rounded-2xl ${msg.role === 'user' ? 'bg-primary text-white rounded-br-none' : 'bg-dark/60 text-light rounded-bl-none'}`}>
                <p>{msg.content}</p>
              </div>
              {msg.role === 'user' && (
                 <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center shadow-glow">
                    <FiUser className="w-6 h-6 text-primary"/>
                </div>
              )}
            </div>
          ))}
           <div ref={messagesEndRef} />
        </div>

        <div className="p-6 border-t border-primary/20">
          <div className="flex items-center bg-dark/60 rounded-full shadow-glow">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-grow bg-transparent text-light p-4 focus:outline-none rounded-l-full"
            />
            <button onClick={handleSend} className="bg-primary text-white rounded-full p-3 m-2 hover:bg-secondary hover:shadow-glow transition-all duration-300">
              <FiSend className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

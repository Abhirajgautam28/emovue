import { MessageCircle, Paperclip, Send, User } from 'lucide-react';

export default function ChatPage() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <aside className="w-64 bg-gray-800 p-4">
        <div className="flex items-center mb-6">
          <MessageCircle className="w-8 h-8 text-purple-400" />
          <h1 className="ml-3 text-2xl font-bold">EmoVue</h1>
        </div>
        <div className="space-y-2">
          <div className="flex items-center p-2 bg-gray-700 rounded-lg">
            <User className="w-5 h-5 text-gray-400" />
            <span className="ml-3">Chat with AI</span>
          </div>
          {/* Placeholder for more chats */}
        </div>
      </aside>
      <main className="flex-1 flex flex-col">
        <header className="bg-gray-800 p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold">Chat with your AI Companion</h2>
        </header>
        <div className="flex-1 p-6 space-y-4 overflow-y-auto">
          {/* Chat messages will go here */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <User className="w-8 h-8 rounded-full bg-gray-700 p-1" />
            </div>
            <div className="ml-3 bg-gray-800 p-3 rounded-lg">
              <p>Hello! How are you feeling today?</p>
            </div>
          </div>
          <div className="flex items-start justify-end">
            <div className="mr-3 bg-purple-600 p-3 rounded-lg">
              <p>I&apos;m feeling a bit anxious about my upcoming presentation.</p>
            </div>
            <div className="flex-shrink-0">
              <User className="w-8 h-8 rounded-full bg-gray-700 p-1" />
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-4 border-t border-gray-700">
          <div className="relative">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full py-3 pl-4 pr-16 text-white bg-gray-700 border border-gray-600 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <button className="p-2 rounded-full hover:bg-gray-600">
                <Paperclip className="w-5 h-5 text-gray-400" />
              </button>
              <button className="p-2 ml-2 rounded-full bg-purple-500 hover:bg-purple-600">
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

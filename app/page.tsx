import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center">
      <div className="max-w-2xl p-8 space-y-8">
        <h1 className="text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Welcome to EmoVue
        </h1>
        <p className="text-xl text-gray-300">
          Your AI companion that understands your emotions and provides a personalized chat experience.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/login"
            className="flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 shadow-lg hover:shadow-purple-500/50"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

import { ScanLine, ArrowLeft } from 'lucide-react';

export default function ScanPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-2xl p-8 space-y-8 bg-gray-800 rounded-2xl shadow-lg text-center">
        <a href="/chat" className="absolute top-8 left-8 text-purple-400 hover:text-purple-300">
          <ArrowLeft className="w-8 h-8" />
        </a>
        <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Scan Your Emotion</h1>
        <p className="mt-2 text-gray-400">Center your face in the camera view to scan your emotion.</p>
        <div className="relative w-full h-96 bg-gray-700 rounded-lg overflow-hidden">
          {/* Placeholder for camera feed */}
          <div className="absolute inset-0 flex items-center justify-center">
            <ScanLine className="w-32 h-32 text-gray-500 opacity-50" />
          </div>
        </div>
        <div>
          <button
            type="button"
            className="w-full py-4 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 shadow-lg hover:shadow-purple-500/50"
          >
            Scan Now
          </button>
        </div>
      </div>
    </div>
  );
}

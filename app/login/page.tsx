import { Key, Mail } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-2xl shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Welcome Back</h1>
          <p className="mt-2 text-gray-400">Sign in to continue to EmoVue</p>
        </div>
        <form className="space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Mail className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full py-3 pl-10 pr-4 text-white bg-gray-700 border border-gray-600 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Key className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="w-full py-3 pl-10 pr-4 text-white bg-gray-700 border border-gray-600 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 shadow-lg hover:shadow-purple-500/50"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-gray-400">
            Don&apos;t have an account?{' '}
            <a href="/register" className="font-medium text-purple-400 hover:text-purple-300">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

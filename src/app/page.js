'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from '@/components/3d/Scene';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-8 text-white overflow-hidden bg-dark">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Scene />
          <OrbitControls 
            autoRotate 
            autoRotateSpeed={0.5} 
            enableZoom={false} 
            enablePan={false} 
            minPolarAngle={Math.PI / 2} 
            maxPolarAngle={Math.PI / 2} 
          />
        </Canvas>
      </div>

      <div className="z-10 flex flex-col items-center text-center animate-fade-in">
        <div className="bg-dark/60 backdrop-blur-md p-8 rounded-2xl shadow-glow max-w-4xl">
          <h1 className="font-display text-7xl font-bold mb-4 text-primary">
            Welcome to EmoVue
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-light">
            Discover a new way to interact with AI. EmoVue understands your emotions and provides a personalized chat experience. Your AI companion that understands you.
          </p>
          <button onClick={() => router.push('/login')} className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-secondary hover:shadow-glow transition-all duration-300">
            Get Started
          </button>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl w-full">
          <div className="bg-dark/60 backdrop-blur-md p-6 rounded-2xl shadow-glow">
            <h2 className="font-display text-3xl font-bold mb-3 text-primary">How It Works</h2>
            <p className="text-light">EmoVue uses your webcam to analyze your facial expressions in real-time. Our advanced AI then tailors its responses to match your mood, creating a truly empathetic conversation. This seamless integration of emotion recognition technology allows for a more natural and intuitive interaction with our AI.</p>
          </div>
          <div className="bg-dark/60 backdrop-blur-md p-6 rounded-2xl shadow-glow">
            <h2 className="font-display text-3xl font-bold mb-3 text-primary">Key Features</h2>
            <ul className="list-disc list-inside text-left text-light">
              <li>Real-time emotion detection</li>
              <li>Personalized AI chat</li>
              <li>Secure and private</li>
              <li>Modern and intuitive design</li>
              <li>Seamless user experience</li>
              <li>24/7 availability</li>
            </ul>
          </div>
          <div className="bg-dark/60 backdrop-blur-md p-6 rounded-2xl shadow-glow">
            <h2 className="font-display text-3xl font-bold mb-3 text-primary">About Us</h2>
            <p className="text-light">We are a team of passionate developers and designers dedicated to creating innovative and meaningful digital experiences. EmoVue is our latest project, and we hope you enjoy it. Our mission is to bridge the gap between technology and human emotion, creating a more empathetic digital world.</p>
          </div>
        </div>

        <div className="mt-16 text-center max-w-2xl animate-slide-in">
          <h2 className="font-display text-4xl font-bold mb-4 text-primary">Ready to Experience the Future of AI?</h2>
          <p className="text-lg mb-8 text-light">
            Join EmoVue today and start your journey with an AI that truly understands you.
          </p>
          <button onClick={() => router.push('/register')} className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-secondary hover:shadow-glow transition-all duration-300">
            Sign Up Now
          </button>
        </div>

        <div className="mt-16 text-center max-w-2xl">
          <h2 className="font-display text-2xl font-bold mb-2 text-primary">Demo Account</h2>
          <p className="text-light">Email: <span className="font-mono">demouser@emovue.com</span></p>
          <p className="text-light">Password: <span className="font-mono">password123</span></p>
        </div>
      </div>
    </main>
  );
}

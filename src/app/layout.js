import { Inter } from 'next/font/google';
import LocalFont from 'next/font/local';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const calSans = LocalFont({
  src: '../../public/fonts/CalSans-SemiBold.woff2',
  variable: '--font-calsans',
});

export const metadata = {
  title: 'EmoVue - Your AI Companion',
  description: 'An emotional wellness app with a personalized AI companion.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${calSans.variable} font-sans bg-dark text-light`}>
        {children}
      </body>
    </html>
  );
}

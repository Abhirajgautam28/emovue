import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const calSans = localFont({
  src: '../../public/fonts/CalSans-SemiBold.woff2',
  variable: '--font-calsans',
});

export const metadata = {
  title: 'EmoVue',
  description: 'Real-time emotion analysis from your webcam',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${calSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}

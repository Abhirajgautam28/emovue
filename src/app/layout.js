'use client';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const calSans = localFont({
  src: '../../public/fonts/CalSans-SemiBold.woff2',
  variable: '--font-calsans',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${calSans.variable} font-sans`}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

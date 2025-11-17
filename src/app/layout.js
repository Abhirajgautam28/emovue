import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emotional Wellness App",
  description: "A futuristic AI companion for your emotional wellness.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-80"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10"></div>
        {children}
      </body>
    </html>
  );
}

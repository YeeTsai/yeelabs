import type { Metadata } from "next";
import { Inter, Orbitron, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YEE Labs | Yotta · Epoch · Epsilon",
  description: "Personal Tech Hub of a Senior Blockchain Architect & ERC-3525 Co-author.",
  icons: {
    icon: "/favicon.ico", // Ensure favicon exists or use default
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${jetbrainsMono.variable}`}>
      <body
        className={`antialiased bg-background text-foreground font-sans selection:bg-neon-cyan selection:text-black`}
      >
        <div className="fixed inset-0 -z-50 bg-[url('/circuit-pattern.svg')] opacity-10 pointer-events-none"></div>
        <Navbar />
        <main className="min-h-screen transition-opacity duration-500">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { Terminal } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Library", path: "/library" },
  { name: "About", path: "/#about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Terminal className="w-6 h-6 text-neon-cyan group-hover:text-neon-green transition-colors" />
          <span className="font-orbitron font-bold text-xl tracking-wider text-white group-hover:text-neon-cyan transition-colors">
            YEE LABS
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            
            return (
              <Link
                key={item.path}
                href={item.path}
                className={clsx(
                  "relative text-sm font-medium tracking-wide transition-colors duration-300",
                  isActive ? "text-neon-cyan" : "text-gray-400 hover:text-white"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-neon-cyan shadow-[0_0_10px_#00f3ff]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          
          {/* Terminal Trigger */}
          <Link 
            href="/about" 
            className="ml-4 group flex items-center gap-2 text-gray-400 hover:text-[#0aff00] transition-colors duration-300"
          >
             <span className="hidden group-hover:block font-mono text-sm tracking-tighter text-[#0aff00] animate-in slide-in-from-right-2 duration-300">
               &gt;_ whoami
             </span>
             <Terminal className="w-5 h-5 group-hover:drop-shadow-[0_0_5px_#0aff00] transition-all duration-300" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface CyberCardProps {
  title: string;
  description: string;
  link?: string;
  tags?: string[];
  borderColor?: "cyan" | "blue" | "green";
  className?: string;
}

export default function CyberCard({ 
  title, 
  description, 
  link, 
  tags = [],
  borderColor = "cyan",
  className = ""
}: CyberCardProps) {
  
  const borderColors = {
    cyan: "border-neon-cyan group-hover:shadow-[0_0_20px_#00f3ff]",
    blue: "border-neon-blue group-hover:shadow-[0_0_20px_#2d5af6]",
    green: "border-neon-green group-hover:shadow-[0_0_20px_#0aff00]",
  };

  const textColor = {
     cyan: "text-neon-cyan",
     blue: "text-neon-blue",
     green: "text-neon-green",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`group relative p-6 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-transparent h-full ${className}`}
    >
      {/* Animated Border Gradient on Hover */}
      <div className={`absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${borderColors[borderColor]}`} />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className={`text-xl font-bold font-orbitron ${textColor[borderColor]}`}>
            {title}
          </h3>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          )}
        </div>
        
        <p className="text-gray-300 mb-6 flex-grow leading-relaxed line-clamp-2">
          {description}
        </p>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      {/* Decoration line */}
      <div className="absolute bottom-0 right-0 w-16 h-1 bg-gradient-to-l from-white/20 to-transparent" />
    </motion.div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const codeLines = [
  "while(true) {",
  "  explore(Yotta);",
  "  evolve(Epoch);",
  "  refine(Epsilon);",
  "}"
];

export default function TypingEffect() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  
  // Full text to type out
  const fullText = codeLines.join("\n");
  
  useEffect(() => {
    if (currentCharIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentCharIndex]);
        setCurrentCharIndex((prev) => prev + 1);
      }, 50); // Typing speed
      
      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, fullText]);

  return (
    <div className="font-mono text-neon-green text-lg md:text-xl lg:text-2xl p-6 rounded-lg bg-black/40 border border-white/5 backdrop-blur-sm shadow-[0_0_20px_rgba(10,255,0,0.1)] inline-block text-left">
      <pre>
        <code>
          {displayedText}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2.5 h-5 bg-neon-green ml-1 align-middle"
          />
        </code>
      </pre>
    </div>
  );
}

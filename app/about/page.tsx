"use client";

import { motion } from "framer-motion";
import { Code, Cpu, Globe, Database, Terminal } from "lucide-react";

const techStack = [
  { category: "Blockchains", items: ["Ethereum", "Bitcoin", "Solana", "EOS", "Fabric"], icon: Globe },
  { category: "Languages", items: ["Solidity", "C/C++", "Java", "Python", "Rust", "Go"], icon: Code },
  { category: "Domains", items: ["DeFi", "Quant Trading", "Banking Core", "GameFi"], icon: Database },
  { category: "Core Tech", items: ["Smart Contracts", "Distributed Systems", "Cryptography", "AI Agents"], icon: Cpu },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-32">
       <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
             <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white">
               <span className="text-neon-cyan">&gt;</span> SYSTEM.PROFILE
             </h1>
             <p className="text-xl text-gray-400 font-light border-l-2 border-neon-cyan pl-4">
               Full specifications and runtime parameters.
             </p>
          </motion.div>

          {/* Bio / History */}
          <section className="space-y-6 text-gray-300 leading-relaxed text-lg">
             <h2 className="text-2xl font-bold text-white flex items-center gap-2">
               <Terminal className="w-5 h-5 text-neon-green" /> Kernel Logs
             </h2>
             <p>
                Obsessed with combining <strong className="text-white">Computer Science</strong> and <strong className="text-white">Finance</strong>. 
                With over <span className="text-neon-cyan">20+ years of experience</span>, I have navigated through Banking Core Systems, 
                Internet Finance, and deeply into the Crypto/DeFi revolution.
             </p>
             <p>
                I actively contribute to the blockchain ecosystem, most notably as a co-author of the <strong className="text-white">ERC-3525</strong> standard, 
                which introduced Semi-Fungible Tokens to Ethereum. Currently exploring the intersection of <span className="text-neon-green">AI Agents</span> and Crypto protocols.
             </p>
             <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="p-4 bg-white/5 rounded border border-white/10">
                  <h4 className="text-white font-bold mb-1">M.S. Finance</h4>
                  <p className="text-sm text-gray-500">Renmin University of China</p>
                </div>
                <div className="p-4 bg-white/5 rounded border border-white/10">
                  <h4 className="text-white font-bold mb-1">B.S. Computer Science</h4>
                  <p className="text-sm text-gray-500">Kunming University of Sci-Tech</p>
                </div>
              </div>
          </section>

          {/* Tech Stack Matrix */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
               <Cpu className="w-5 h-5 text-neon-blue" /> Module Configuration
             </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {techStack.map((stack, idx) => (
                <motion.div 
                  key={stack.category}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-colors"
                >
                  <h4 className="flex items-center gap-2 text-white font-bold mb-4">
                    <stack.icon className="w-4 h-4 text-neon-cyan" /> {stack.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map(item => (
                      <span key={item} className="text-sm px-3 py-1 rounded bg-black/50 text-gray-300 border border-white/10 hover:text-neon-cyan hover:border-neon-cyan transition-colors cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

       </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import TypingEffect from "@/components/TypingEffect";
import CyberCard from "@/components/CyberCard";
import { useState, useEffect } from "react";
import { ArrowRight, Code, Cpu, Globe, Database } from "lucide-react";

const identities = [
  "Senior Blockchain Architect",
  "ERC-3525 Co-Author",
  "AI + Crypto Researcher",
  "Finance + Tech Hybrid"
];

const projects = [
  {
    title: "Solv Protocol",
    description: "Bitcoin-native DeFi ecosystem ($1B+ TVL). Activating Bitcoin as a capital-efficient asset within a growing ecosystem.",
    link: "https://solv.finance",
    tags: ["DeFi", "Bitcoin", "Smart Contracts"],
    borderColor: "cyan" as const
  },
  {
    title: "ERC-3525",
    description: "Co-author of the Semi-Fungible Token Standard (EIP-3525). Adopted in Finance, Gaming, and RWA sectors.",
    link: "https://eips.ethereum.org/EIPS/eip-3525",
    tags: ["Standard", "Reseach", "Ethereum"],
    borderColor: "green" as const
  },
  {
    title: "YES Lab",
    description: "Yield Entropy Synthesis Lab. AI-Driven Crypto Quant Trading Platform leveraging advanced strategies.",
    link: "https://yeslab.app",
    tags: ["AI", "Quant", "Trading"],
    borderColor: "blue" as const
  },
  {
    title: "Kunlun Bank 3.0",
    description: "Distributed Core Banking System serving 400B+ Asset Scale. Architecture design and implementation.",
    link: undefined,
    tags: ["Banking", "Distributed System", "Java"],
    borderColor: "cyan" as const
  }
];

const techStack = [
  { category: "Blockchains", items: ["Ethereum", "Bitcoin", "Solana", "EOS", "Fabric"], icon: Globe },
  { category: "Languages", items: ["Solidity", "C/C++", "Java", "Python", "Rust", "Go"], icon: Code },
  { category: "Domains", items: ["DeFi", "Quant Trading", "Banking Core", "GameFi"], icon: Database },
  { category: "Core Tech", items: ["Smart Contracts", "Distributed Systems", "Cryptography", "AI Agents"], icon: Cpu },
];

export default function Home() {
  const [identityIndex, setIdentityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdentityIndex((prev) => (prev + 1) % identities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-24 pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-blue/20 rounded-full blur-[128px]" />

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-neon-cyan font-mono text-sm tracking-widest mb-2 border-l-2 border-neon-cyan pl-3">
                SYSTEM.INIT_SEQUENCE()
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold font-orbitron leading-tight text-white mb-4">
                YEE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">LABS</span>
              </h1>
              <div className="h-8 mb-6">
                <span className="text-xl md:text-2xl text-gray-300 font-light">
                  I am a{" "}
                  <motion.span
                    key={identityIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="text-neon-green font-bold"
                  >
                    {identities[identityIndex]}
                  </motion.span>
                </span>
              </div>
              <p className="text-gray-400 max-w-lg text-lg leading-relaxed">
                Scale to <span className="text-white font-bold">Yotta</span>. 
                Learn in <span className="text-white font-bold">Epochs</span>. 
                Precise to <span className="text-white font-bold">Epsilon</span>.
              </p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5, duration: 0.8 }}
               className="flex gap-4 pt-4"
            >
              <a href="#projects" className="px-6 py-3 bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan rounded hover:bg-neon-cyan hover:text-black transition-all duration-300 font-bold tracking-wide">
                EXPLORE PROJECTS
              </a>
              <a href="/blog" className="px-6 py-3 border border-white/20 text-white rounded hover:border-white hover:bg-white/5 transition-all duration-300 font-bold tracking-wide flex items-center gap-2">
                READ LOGS <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <TypingEffect />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-neon-cyan to-transparent"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-20 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/10 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-12 flex items-center gap-4"
          >
            <span className="text-neon-cyan">01.</span> ABOUT_ME
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6 text-gray-300 leading-relaxed font-light">
              <p>
                Obsessed with combining <strong className="text-white">Computer Science</strong> and <strong className="text-white">Finance</strong>. 
                With over <span className="text-neon-cyan">20+ years of experience</span>, I have navigated through Banking Core Systems, 
                Internet Finance, and deeply into the Crypto/DeFi revolution.
              </p>
              <p>
                I actively contribute to the blockchain ecosystem, most notably as a co-author of the <strong className="text-white">ERC-3525</strong> standard, 
                which introduced Semi-Fungible Tokens to Ethereum. Currently exploring the intersection of <span className="text-neon-green">AI Agents</span> and Crypto protocols.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="pl-4 border-l border-neon-blue">
                  <h4 className="text-white font-bold">M.S. Finance</h4>
                  <p className="text-sm text-gray-500">Renmin University of China</p>
                </div>
                <div className="pl-4 border-l border-neon-blue">
                  <h4 className="text-white font-bold">B.S. Computer Science</h4>
                  <p className="text-sm text-gray-500">Kunming University of Sci-Tech</p>
                </div>
              </div>
            </div>
            
            {/* Tech Stack Mini-Grid */}
            <div className="space-y-6">
              {techStack.map((stack) => (
                <div key={stack.category}>
                  <h4 className="flex items-center gap-2 text-white font-bold mb-2">
                    <stack.icon className="w-4 h-4 text-neon-cyan" /> {stack.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map(item => (
                      <span key={item} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5 hover:border-neon-cyan/50 hover:text-neon-cyan transition-colors cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-6 py-20">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-12 flex items-center gap-4"
        >
          <span className="text-neon-cyan">02.</span> SELECTED_WORKS
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CyberCard {...project} />
              </motion.div>
            ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto bg-gradient-to-b from-white/5 to-transparent p-12 rounded-2xl border border-white/10 relative overflow-hidden">
           <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></div>
           
           <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-4">
             Ready to Explore?
           </h3>
           <p className="text-gray-400 mb-8">
             Dive into my technical logs or check out the latest research.
           </p>
           <a href="/blog" className="inline-block px-8 py-4 bg-neon-blue hover:bg-neon-blue/80 text-white rounded font-bold transition-all shadow-[0_0_20px_#2d5af6]">
             VISIT THE LOGS
           </a>
        </div>
      </section>

    </div>
  );
}

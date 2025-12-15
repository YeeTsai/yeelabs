"use client";

import { motion } from "framer-motion";
import TypingEffect from "@/components/TypingEffect";
import CyberCard from "@/components/CyberCard";
import EngineCard from "@/components/EngineCard";
import NextImage from "next/image";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

const experiments = [
  {
    title: "YES Lab",
    description: "Yield Entropy Synthesis Lab is a quantitative ecosystem engineered to synthesize order from market entropy, transforming volatility into sustainable yield.",
    link: "https://yeslab.app",
    tags: ["AI", "Quant", "Trading", "Crypto", "Research"],
    borderColor: "blue" as const
  },
  {
    title: "ERC-3525",
    description: "Redefining Digital Assets with Semi-Fungible Tokens. Adopted in Finance, Gaming, and RWA sectors.",
    link: "https://eips.ethereum.org/EIPS/eip-3525",
    tags: ["Standard", "Research", "Ethereum"],
    borderColor: "green" as const
  },
  {
    title: "Solv Protocol",
    description: "Building the Bitcoin Economy. Bitcoin-native DeFi ecosystem ($1B+ TVL).",
    link: "https://solv.finance",
    tags: ["DeFi", "Bitcoin", "Smart Contracts"],
    borderColor: "cyan" as const
  },
  {
    title: "Open Source Tools",
    description: "Small utilities born from curiosity. A collection of scripts and tools for the ecosystem.",
    // link: "https://github.com/...", // Placeholder or link to github profile
    link: "https://github.com/YeeTsai",
    tags: ["Tools", "Open Source", "Scripts"],
    borderColor: "cyan" as const
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen snap-start flex items-center justify-center pt-16">
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
              <div className="mb-6 space-y-2">
                <p className="text-xl md:text-2xl text-gray-300 font-light">
                   Scale to <span className="text-white font-bold">Yotta</span>. 
                   Learn in <span className="text-white font-bold">Epochs</span>. 
                   Precise to <span className="text-white font-bold">Epsilon</span>.
                </p>
                <p className="text-neon-green/80 font-mono text-sm md:text-base tracking-wide">
                  &gt; A digital playground for experiments, whimsical ideas, and code alchemy.
                </p>
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5, duration: 0.8 }}
               className="flex gap-4 pt-4"
            >
              <a href="#core" className="px-6 py-3 bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan rounded hover:bg-neon-cyan hover:text-black transition-all duration-300 font-bold tracking-wide">
                ENTER THE LAB
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
            className="flex flex-col items-center justify-center gap-6"
          >
            {/* Hero Logo */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                filter: [
                  "drop-shadow(0 0 15px rgba(0, 243, 255, 0.3)) brightness(1)",
                  "drop-shadow(0 0 25px rgba(0, 243, 255, 0.5)) brightness(1.2)",
                  "drop-shadow(0 0 15px rgba(0, 243, 255, 0.3)) brightness(1)"
                ]
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="relative w-48 md:w-64 aspect-square"
            >
               <NextImage
                 src="/logo.png"
                 alt="Reactor Logo"
                 fill
                 className="object-contain mix-blend-screen"
                 priority
               />
            </motion.div>

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

      {/* Core Section */}
      <section id="core" className="container mx-auto px-6 py-20 min-h-screen snap-start flex flex-col justify-center">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-12 flex items-center gap-4"
        >
          <span className="text-neon-cyan">00.</span> THE_CORE
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
                <div>
                   <h3 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-2">Y.E.E</h3>
                   <p className="text-neon-cyan font-mono text-sm tracking-widest border-l-2 border-neon-cyan pl-3">
                     Yee’s Enhanced-intelligence Engine
                   </p>
                </div>
                <p className="text-xl text-gray-300 font-light leading-relaxed max-w-lg">
                  Enhanced-intelligence Engine for Super Individuals, the underlying intelligence engine by YEE Labs that turns AI into a force multiplier for individual capability and execution.
                </p>
            </motion.div>

            {/* Right Column: EngineCard */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="flex justify-start"
            >
               <EngineCard />
            </motion.div>
        </div>
      </section>

      {/* Experiments Section */}
      <section id="experiments" className="container mx-auto px-6 py-20 min-h-screen snap-start flex flex-col justify-center">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-12 flex items-center gap-4"
        >
          <span className="text-neon-cyan">01.</span> THE_EXPERIMENTS
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
            {experiments.map((project, index) => (
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

      {/* The Alchemist Section */}
      <section id="about" className="container mx-auto px-6 py-20 min-h-screen snap-start flex flex-col justify-center relative">
         <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/10 rounded-full blur-[100px]" />
         
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-12 flex items-center gap-4"
            >
              <span className="text-neon-cyan">02.</span> THE_ALCHEMIST
            </motion.h2>

            <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center gap-8"
            >
               {/* Avatar */}
               <div className="relative w-32 h-32 shrink-0 rounded-full overflow-hidden border-2 border-neon-cyan shadow-[0_0_20px_rgba(0,243,255,0.3)] bg-black">
                 <NextImage
                   src="/logo.png"
                   alt="Alchemist Avatar"
                   fill
                   className="object-cover mix-blend-screen scale-110"
                 />
               </div>

               {/* Content */}
               <div className="flex-1 text-center md:text-left space-y-4">
                  <p className="text-xl text-white font-light">
                    Senior Architect & <span className="text-neon-green font-bold">ERC-3525</span> Co-author.
                  </p>
                  <p className="text-gray-400">
                    Obsessed with the intersection of <span className="text-white">AI</span>, <span className="text-white">Crypto</span>, and <span className="text-white">Math</span>.
                    Exploring the boundaries of digital value and autonomous systems.
                  </p>
                  
                  <div className="pt-4">
                     <Link href="/about" className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-green transition-colors font-mono text-sm">
                       <Terminal className="w-4 h-4" />
                       <span>Full specs available in the Terminal.</span>
                     </Link>
                  </div>
               </div>
            </motion.div>
            </div>
      </section>

    </div>
  );
}

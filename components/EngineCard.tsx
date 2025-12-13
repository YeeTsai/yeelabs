"use client";

import React from "react";

const LOGS = [
  "> [SYSTEM] YEE_CORE_KERNEL initialized...",
  "> [AUTH] User verified: ADMIN_YEE",
  "> [CONNECT] Connecting to Ethereum Mainnet... [OK]",
  "> [CONNECT] Connecting to Solana RPC... [OK]",
  "> [AI-AGENT] Fetching market sentiment data...",
  "> [ANALYSIS] BTC_USDT volatility index: HIGH",
  "> [QUANT] Running strategy 'ALPHA_SEEKER_V4'...",
  "> [ERC-3525] Minting SFT Slot #8821...",
  "> [WARN] Gas price spike detected (45 gwei)",
  "> [OPTIMIZE] Rebalancing portfolio weights...",
  "> [AI-MODEL] Training epoch 1024/5000...",
  "> [GAMEFI] Loot box probability calculated.",
  "> [SYSTEM] Garbage collection... [DONE]",
  "> [DEFI] Yield farming APY updated: 12.5%",
  "> [SLEEP] Awaiting next block...",
  "> [YOTTA] Scaling data structures...",
  "> [EPOCH] Evolving neural pathways...",
  "> [EPSILON] Refining precision parameters...",
  "> [NET] Latency test: 12ms [OPTIMAL]",
  "> [SEC] Encrypting payloads... [DONE]",
  "> [DB] Syncing shard #04 to replica...",
];

export default function EngineCard() {
  return (
    <div className="relative w-full h-[320px] bg-[#000000] border border-[#0aff00]/20 rounded overflow-hidden font-mono text-[#0aff00] text-sm flex flex-col shadow-[0_0_20px_rgba(10,255,0,0.15)]">
      {/* CRT Scanline Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 z-20 opacity-10"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #0aff00 3px, #0aff00 3px)"
        }}
      ></div>
      
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between bg-[#0aff00]/10 px-4 py-2 border-b border-[#0aff00]/30">
        <span className="font-bold tracking-wider">Y.E.E. CONSOLE</span>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-[#0aff00] animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-[#0aff00]/30"></div>
        </div>
      </div>

      {/* Scrolling Content */}
      <div className="relative flex-1 overflow-hidden">
        {/* Gradient Masks */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, #000000 0%, transparent 15%, transparent 85%, #000000 100%)"
          }}
        ></div>

        {/* Scrolling Container */}
        <div className="flex flex-col animate-[scroll-y_15s_linear_infinite] hover:[animation-play-state:paused] w-full">
          {/* First Copy */}
          <div className="flex flex-col">
            {LOGS.map((log, i) => (
              <div key={`log-${i}`} className="px-4 py-0.5 whitespace-nowrap opacity-80 hover:opacity-100 hover:bg-[#0aff00]/10 hover:text-white transition-all duration-150 cursor-crosshair">
                {log}
              </div>
            ))}
          </div>
          {/* Duplicate Copy for Seamless Loop */}
          <div className="flex flex-col">
            {LOGS.map((log, i) => (
              <div key={`log-dup-${i}`} className="px-4 py-0.5 whitespace-nowrap opacity-80 hover:opacity-100 hover:bg-[#0aff00]/10 hover:text-white transition-all duration-150 cursor-crosshair">
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 bg-black px-4 py-1 text-xs border-t border-[#0aff00]/30 flex items-center justify-between">
        <div className="flex items-center">
          <span className="mr-2 opacity-70">{">"}</span>
          <span className="animate-[blink_1s_step-end_infinite] bg-[#0aff00] h-4 w-2 block"></span>
        </div>
        <span className="opacity-50 text-[10px]">VER 2.5.0</span>
      </div>
    </div>
  );
}

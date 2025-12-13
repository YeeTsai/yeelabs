import { Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-20 border-t border-white/10 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-500 text-sm font-mono">
          © {new Date().getFullYear()} YEE Labs. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/YeeTsai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon-green transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com" // Update with actual twitter if known
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon-cyan transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="mailto:contact@yeelabs.com" // Update with actual email if known
            className="text-gray-400 hover:text-neon-blue transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

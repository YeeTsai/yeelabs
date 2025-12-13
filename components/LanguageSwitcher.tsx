"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const handleToggle = () => {
    const newLang = language === "en" ? "zh" : "en";
    
    // Toggle state
    toggleLanguage();
    
    // Logic for redirecting if on a post page
    // Pattern: /blog/slug or /library/slug
    // English slugs match regular names (e.g. "foo")
    // Chinese slugs end in "-zh" (e.g. "foo-zh")
    
    const isPostPage = pathname.startsWith("/blog/") || pathname.startsWith("/library/");
    
    if (isPostPage) {
      if (newLang === "zh") {
        // Switching to Chinese
        // Check if we are already on a -zh page (shouldn't happen if state is consistent, but safety first)
        if (!pathname.endsWith("-zh") && !pathname.endsWith("/page")) {
           router.push(`${pathname}-zh`);
        }
      } else {
        // Switching to English
        if (pathname.endsWith("-zh")) {
           router.push(pathname.replace(/-zh$/, ""));
        }
      }
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleToggle}
      className="ml-4 px-3 py-1 rounded-md border border-cyan-500/30 bg-black/50 text-cyan-400 font-mono text-sm hover:bg-cyan-900/20 hover:text-cyan-300 transition-colors uppercase tracking-wider"
    >
      [{language === "en" ? "EN" : "ZH"}]
    </motion.button>
  );
}

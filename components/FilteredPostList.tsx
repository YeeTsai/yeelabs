"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { PostData } from "@/lib/blog"; // Assuming PostData is same for both
import { motion, AnimatePresence } from "framer-motion";

interface FilteredPostListProps {
  posts: PostData[];
  basePath: "/blog" | "/library";
  type: "blog" | "library";
  emptyMessage: string;
}

export default function FilteredPostList({ posts, basePath, type, emptyMessage }: FilteredPostListProps) {
  const { language } = useLanguage();

  const filteredPosts = posts.filter((post) => {
    
    // Safety check for slug
    const slugStr = post.slug ? post.slug.join("/") : "";
    const isZhSlug = slugStr.endsWith("-zh");
    const isZhMeta = post.meta.language === "zh";

    if (language === "zh") {
      return isZhSlug || isZhMeta;
    } else {
      // English mode: Show if NOT Chinese
      return !isZhSlug && !isZhMeta;
    }
  });

  return (
    <div className="space-y-12">
      <AnimatePresence mode="popLayout">
        {filteredPosts.map((post) => {
          const title = post.meta.title || "Untitled";
          const date = post.meta.date || "Unknown Date";
          const excerpt = post.meta.excerpt || "";
          const tags = post.meta.tags || [];
          const slugPath = `${basePath}/${post.slug.join("/")}`;

          return (
            <motion.article
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              key={slugPath}
              className="group border-l-2 border-white/10 pl-8 transition-colors hover:border-neon-cyan"
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-2">
                <h2 className="text-2xl font-bold font-orbitron text-white group-hover:text-neon-cyan transition-colors">
                  <Link href={slugPath}>{title}</Link>
                </h2>
                <div className="flex items-center gap-2 font-mono text-xs text-neon-green">
                  {type === "library" && post.meta.author && (
                    <span className="text-white/80">{post.meta.author} •</span>
                  )}
                  <time>{date}</time>
                </div>
              </div>

              <p className="text-gray-400 mb-4 max-w-2xl leading-relaxed">
                {excerpt}
              </p>

              <div className="flex gap-3 items-center">
                {tags.map((tag: string) => (
                  <span key={tag} className="text-xs font-mono text-gray-500">
                    #{tag}
                  </span>
                ))}
                <Link
                  href={slugPath}
                  className="text-sm font-bold text-neon-blue hover:text-white ml-auto transition-colors"
                >
                  {type === "library" ? "READ_ARTICLE_>" : "READ_ENTRY_>"}
                </Link>
              </div>
            </motion.article>
          );
        })}
      </AnimatePresence>

      {filteredPosts.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-500 font-mono"
        >
          {emptyMessage} ({language === "en" ? "English" : "Chinese"})
        </motion.p>
      )}
    </div>
  );
}

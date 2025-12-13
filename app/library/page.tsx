import Link from "next/link";
import { getAllLibraryPosts } from "@/lib/library";

export const metadata = {
  title: "Digital Library | YEE Labs",
  description: "Curated collection of valuable external articles and resources.",
};

export default function LibraryListingPage() {
  const posts = getAllLibraryPosts();

  return (
    <div className="container mx-auto px-6 py-24 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
          DIGITAL <span className="text-neon-cyan">LIBRARY</span>
        </h1>
        <p className="text-gray-400 mb-16 text-lg">
          Curated collection of valuable external articles and resources.
        </p>

        <div className="space-y-12">
          {posts.map((post) => {
            const title = post.meta.title || "Untitled";
            const date = post.meta.date || "Unknown Date";
            const excerpt = post.meta.excerpt || "";
            const tags = post.meta.tags || [];
            
            // Construct slug path
            const slugPath = `/library/${post.slug.join("/")}`;

            return (
              <article key={slugPath} className="group border-l-2 border-white/10 pl-8 transition-colors hover:border-neon-cyan">
                  <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-2">
                   <h2 className="text-2xl font-bold font-orbitron text-white group-hover:text-neon-cyan transition-colors">
                     <Link href={slugPath}>{title}</Link>
                   </h2>
                   <div className="flex items-center gap-2 font-mono text-xs text-neon-green">
                     {post.meta.author && <span className="text-white/80">{post.meta.author} •</span>}
                     <time>{date}</time>
                   </div>
                </div>
                
                <p className="text-gray-400 mb-4 max-w-2xl leading-relaxed">
                  {excerpt}
                </p>
                
                <div className="flex gap-3 items-center">
                   {tags.map((tag: string) => (
                     <span key={tag} className="text-xs font-mono text-gray-500">#{tag}</span>
                   ))}
                   <Link href={slugPath} className="text-sm font-bold text-neon-blue hover:text-white ml-auto transition-colors">
                     READ_ARTICLE_&gt;
                   </Link>
                </div>
              </article>
            );
          })}
          
          {posts.length === 0 && (
             <p className="text-gray-500 font-mono">No archives found. Library initialization pending...</p>
          )}
        </div>
      </div>
    </div>
  );
}

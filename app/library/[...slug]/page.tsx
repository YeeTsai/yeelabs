import { getAllLibraryPosts, getLibraryPostBySlug } from "@/lib/library";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { notFound } from "next/navigation";
import Link from "next/link";

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = getAllLibraryPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const post = getLibraryPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };
  
  return {
    title: `${post.meta.title} | YEE Labs Library`,
    description: post.meta.excerpt,
  };
}

export default async function LibraryPostPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const post = getLibraryPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-6 py-24 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12 border-b border-white/10 pb-8">
           <div className="flex gap-4 mb-4 font-mono text-sm text-neon-green">
              {post.meta.author && <span className="text-white/80">By {post.meta.author}</span>}
              <span className="text-gray-500">|</span>
              <time>{post.meta.date}</time>
              <span>// {post.meta.tags?.join(", ")}</span>
           </div>
           <h1 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6 leading-tight">
             {post.meta.title}
           </h1>
           {post.meta.excerpt && (
             <p className="text-xl text-gray-400 font-light leading-relaxed">
               {post.meta.excerpt}
             </p>
           )}
           {post.meta.source && (
             <div className="mt-4">
               <span className="text-gray-500 font-mono text-sm">Source: </span>
               <a href={post.meta.source} target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:text-white transition-colors text-sm font-mono break-all">
                 {post.meta.source}
               </a>
             </div>
           )}
        </header>

        <MarkdownRenderer source={post.content} />
        
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <Link href="/library" className="text-neon-cyan hover:text-white transition-colors font-bold">
            &lt; RETURN_TO_LIBRARY
          </Link>
        </div>
      </div>
    </article>
  );
}

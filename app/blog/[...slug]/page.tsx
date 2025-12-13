import { getAllPosts, getPostBySlug } from "@/lib/blog";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { notFound } from "next/navigation";

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  
  return {
    title: `${post.meta.title} | YEE Labs`,
    description: post.meta.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-6 py-24 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12 border-b border-white/10 pb-8">
           <div className="flex gap-4 mb-4 font-mono text-sm text-neon-green">
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
        </header>

        <MarkdownRenderer source={post.content} />
        
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <a href="/blog" className="text-neon-cyan hover:text-white transition-colors font-bold">
            &lt; RETURN_TO_LOGS
          </a>
        </div>
      </div>
    </article>
  );
}

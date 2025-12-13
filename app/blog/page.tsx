import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import FilteredPostList from "@/components/FilteredPostList";

export const metadata = {
  title: "Engineering Logs | YEE Labs",
  description: "Technical writings on Blockchain, AI, and Financial Engineering.",
};

export default function BlogListingPage() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-6 py-24 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
          ENGINEERING <span className="text-neon-cyan">LOGS</span>
        </h1>
        <p className="text-gray-400 mb-16 text-lg">
          Insights from the intersection of Decentralized Finance and Artificial Intelligence.
        </p>

        <FilteredPostList 
          posts={posts} 
          basePath="/blog" 
          type="blog" 
          emptyMessage="No logs found for selected language." 
        />
      </div>
    </div>
  );
}

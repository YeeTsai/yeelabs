import Link from "next/link";
import { getAllLibraryPosts } from "@/lib/library";
import FilteredPostList from "@/components/FilteredPostList";

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

        <FilteredPostList 
          posts={posts} 
          basePath="/library" 
          type="library" 
          emptyMessage="No archives found for selected language." 
        />
      </div>
    </div>
  );
}

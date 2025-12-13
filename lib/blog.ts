import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "articles");

export interface KeyValueData {
  [key: string]: any;
}

export interface PostData {
  slug: string[];
  meta: KeyValueData;
  content: string;
}

// Ensure articles directory exists
if (!fs.existsSync(articlesDirectory)) {
  fs.mkdirSync(articlesDirectory, { recursive: true });
}

// Recursively get all files
function getAllFiles(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);
  
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      if (file.endsWith(".md") || file.endsWith(".mdx")) {
         fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

export function getAllPosts(): PostData[] {
  const files = getAllFiles(articlesDirectory);
  
  const posts = files.map((filePath) => {
    // Calculate slug relative to articlesDirectory
    const relativePath = path.relative(articlesDirectory, filePath);
    // Remove extension
    const cleanPath = relativePath.replace(/\.(mdx|md)$/, "");
    // Split into segments
    const slug = cleanPath.split(path.sep);
    
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    
    return {
      slug,
      meta: data,
      content,
    };
  });
  
  // Sort by date if present
  return posts.sort((a, b) => {
    if (a.meta.date && b.meta.date) {
      return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
    }
    return 0;
  });
}

export function getPostBySlug(slug: string[]): PostData | undefined {
  const targetPathPart = slug.join(path.sep);
  
  // Try .md and .mdx
  const possiblePaths = [
    path.join(articlesDirectory, targetPathPart + ".md"),
    path.join(articlesDirectory, targetPathPart + ".mdx"),
    path.join(articlesDirectory, targetPathPart, "index.md"),
    path.join(articlesDirectory, targetPathPart, "index.mdx"),
  ];
  
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      const fileContent = fs.readFileSync(p, "utf-8");
      const { data, content } = matter(fileContent);
      return {
        slug,
        meta: data,
        content
      };
    }
  }
  
  return undefined;
}

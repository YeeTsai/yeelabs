import fs from "fs";
import path from "path";
import matter from "gray-matter";

const libraryDirectory = path.join(process.cwd(), "library");

export interface KeyValueData {
  [key: string]: any;
}

export interface PostData {
  slug: string[];
  meta: KeyValueData;
  content: string;
}

// Ensure library directory exists
if (!fs.existsSync(libraryDirectory)) {
  fs.mkdirSync(libraryDirectory, { recursive: true });
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

export function getAllLibraryPosts(): PostData[] {
  const files = getAllFiles(libraryDirectory);
  
  const allPosts = files.map((filePath): PostData | null => {
    try {
      // Calculate slug relative to libraryDirectory
      const relativePath = path.relative(libraryDirectory, filePath);
      // Remove extension
      const cleanPath = relativePath.replace(/\.(mdx|md)$/, "");
      // Split into segments
      const slug = cleanPath.split(path.sep);
      
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      // Try to extract date from filename if not in frontmatter
      const fileName = path.basename(filePath);
      const dateMatch = fileName.match(/^(\d{4}-\d{2}-\d{2})/);
      let date = data.date || (dateMatch ? dateMatch[1] : null);

      if (date instanceof Date) {
          date = date.toISOString().split('T')[0];
      }
      
      return {
        slug,
        meta: { ...data, date },
        content,
      };
    } catch (error) {
      console.error(`Error processing file ${filePath}:`, error);
      return null;
    }
  });

  const posts = allPosts.filter((post): post is PostData => post !== null);
  
  // Sort by date if present
  return posts.sort((a, b) => {
    if (a.meta.date && b.meta.date) {
      return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
    }
    return 0;
  });
}

export function getLibraryPostBySlug(slug: string[]): PostData | undefined {
  const targetPathPart = slug.join(path.sep);
  
  // Try .md and .mdx
  const possiblePaths = [
    path.join(libraryDirectory, targetPathPart + ".md"),
    path.join(libraryDirectory, targetPathPart + ".mdx"),
    path.join(libraryDirectory, targetPathPart, "index.md"),
    path.join(libraryDirectory, targetPathPart, "index.mdx"),
  ];
  
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      const fileContent = fs.readFileSync(p, "utf-8");
      const { data, content } = matter(fileContent);
      const fileName = path.basename(p);
      const dateMatch = fileName.match(/^(\d{4}-\d{2}-\d{2})/);
      let date = data.date || (dateMatch ? dateMatch[1] : null);

      if (date instanceof Date) {
          date = date.toISOString().split('T')[0];
      }

      return {
        slug,
        meta: { ...data, date },
        content
      };
    }
  }
  
  return undefined;
}

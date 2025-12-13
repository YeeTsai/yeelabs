import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypePrettyCode from "rehype-pretty-code";
import "katex/dist/katex.min.css"; 

const components = {
  h1: (props: any) => <h1 {...props} className="text-3xl font-orbitron font-bold text-white mb-6 mt-10" />,
  h2: (props: any) => <h2 {...props} className="text-2xl font-orbitron font-bold text-white mb-4 mt-8 border-l-2 border-neon-cyan pl-4" />,
  h3: (props: any) => <h3 {...props} className="text-xl font-orbitron font-bold text-neon-cyan mb-3 mt-6" />,
  p: (props: any) => <p {...props} className="mb-4 leading-relaxed text-gray-300" />,
  a: (props: any) => <a {...props} className="text-neon-cyan hover:underline decoration-neon-cyan/50 underline-offset-4" />,
  ul: (props: any) => <ul {...props} className="list-disc list-inside mb-4 text-gray-300 marker:text-neon-green" />,
  ol: (props: any) => <ol {...props} className="list-decimal list-inside mb-4 text-gray-300 marker:text-neon-cyan" />,
  blockquote: (props: any) => <blockquote {...props} className="border-l-4 border-neon-blue pl-4 py-2 my-4 bg-white/5 rounded-r italic text-gray-400" />,
  pre: (props: any) => <pre {...props} className="mb-6 rounded-lg overflow-x-auto border border-white/10" />,
  code: (props: any) => <code {...props} className="font-mono text-sm" />,
  // Add more custom components if needed (e.g. Callout, Image)
};

const options = {
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeKatex,
      [
        rehypePrettyCode,
        {
          theme: "dracula", // or any other VSCode compatible theme
          keepBackground: true,
        },
      ],
    ],
  },
};

export default function MarkdownRenderer({ source }: { source: string }) {
  return (
    <div className="prose prose-invert prose-pre:bg-black/50 prose-pre:backdrop-blur-sm max-w-none">
       {/* @ts-expect-error Async Server Component */}
      <MDXRemote source={source} components={components} options={options} />
    </div>
  );
}

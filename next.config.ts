import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  reactCompiler: false, // User didn't ask for it, sticking to standard
};

export default nextConfig;

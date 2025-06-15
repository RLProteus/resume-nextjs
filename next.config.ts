import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/resume-nextjs',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

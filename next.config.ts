import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/posadas-work-portfolio",
  assetPrefix: "/posadas-work-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/posadas-work-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

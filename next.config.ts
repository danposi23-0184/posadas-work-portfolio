
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/posadas-work-portfolio",
  assetPrefix: "/posadas-work-portfolio",
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

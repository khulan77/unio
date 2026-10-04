import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve local assets directly without the hosted image transformation service.
  images: { unoptimized: true },
};

export default nextConfig;

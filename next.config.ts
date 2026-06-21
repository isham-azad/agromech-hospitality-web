import type { NextConfig } from "next";

const nextConfig: NextConfig & { allowedDevOrigins?: string[] } = {
  /* config options here */
  allowedDevOrigins: ['192.168.8.205'],
};

export default nextConfig;

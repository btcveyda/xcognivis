import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Enable React strict mode for catching potential issues early
  reactStrictMode: true,
  // Compress output for better performance
  compress: true,
  // Generate ETags for caching
  generateEtags: true,
  // Power header removed for security
  poweredByHeader: false,
};

export default nextConfig;

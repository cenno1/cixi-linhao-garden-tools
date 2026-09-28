import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: "/products/brass-double-male-connector-3642", destination: "/products/brass-double-female-connector-3642", permanent: true },
    ];
  },
};

export default nextConfig;

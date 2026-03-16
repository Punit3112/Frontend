import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d5ik1gor6xydq.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;

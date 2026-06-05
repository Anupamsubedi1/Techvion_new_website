import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // Placeholder team avatars are served by DiceBear (deterministic by seed).
    remotePatterns: [{ protocol: "https", hostname: "api.dicebear.com" }],
  },
  async redirects() {
    return [
      // Inquiry was merged into the Contact conversion hub.
      { source: "/inquiry", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;

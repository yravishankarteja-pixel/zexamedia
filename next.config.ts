import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.29.116"],
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.zexamedia.in",
          },
        ],
        destination: "https://zexamedia.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

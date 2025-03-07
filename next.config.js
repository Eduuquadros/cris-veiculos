/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "sa-east-1.graphassets.com",
        port: "",
      },
    ],
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/api/<route-name>",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, max-age=0",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        port: "1337",
        protocol: "http",
        hostname: "localhost",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;

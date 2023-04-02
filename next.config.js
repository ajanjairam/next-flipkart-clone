/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        pathname: "/image/**",
        hostname: "api.lorem.space",
      },
    ],
  },
};

module.exports = nextConfig;

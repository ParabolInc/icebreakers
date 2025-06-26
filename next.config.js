/** @type {import('next').NextConfig} */

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;
const CACHE_CONTROL_HEADER = {
  key: "Cache-Control",
  value: `public, max-age=${ONE_YEAR_SECONDS}, immutable`,
};

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  headers: async () => {
    return [
      {
        source: "/img/:path*",
        headers: [CACHE_CONTROL_HEADER],
      },
    ];
  },
};

module.exports = nextConfig;

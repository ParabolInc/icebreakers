/** @type {import('next').NextConfig} */

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;
const CACHE_CONTROL_HEADER = {
  key: "Cache-Control",
  value: `public, max-age=${ONE_YEAR_SECONDS}, immutable`,
};
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src parabol.co vercel.app;
  style-src 'self' parabol.co vercel.app;
  font-src 'self';  
`;
const SECURITY_HEADERS = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
      {
        source: "/img/:path*",
        headers: [CACHE_CONTROL_HEADER],
      },
    ];
  },
};

module.exports = nextConfig;

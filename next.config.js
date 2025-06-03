/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  i18n: {
    locales: ["pt-br"],
    defaultLocale: "pt-br",
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
    minimumCacheTTL: 1500000,
  },

  async redirects() {
    return [
      {
        source: "/areas-de-atuacao",
        destination: "/#areas-de-atuacao",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

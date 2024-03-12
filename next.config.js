/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/tos',
          destination: '/GifmeBeer_Terms_and_Conditions.pdf',
        },
        {
          source: '/collections',
          destination: '/',
        },
        {
          source: '/claim/:path*',
          destination: '/',
        },
      ],
    };
  },
};

module.exports = nextConfig;

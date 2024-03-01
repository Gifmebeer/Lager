/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/tos',
          destination: '/GifmeBeer_Terms_and_Conditions.pdf',
        },
      ],
    };
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          destination: '/GIFMEBEER_WEBSITE_01.pdf',
        },
      ],
    };
  },
};

module.exports = nextConfig;

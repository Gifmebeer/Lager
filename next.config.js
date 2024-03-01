/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      afterFiles: [
        {
          source: '/:path*',
          // destination: '/GIFMEBEER_WEBSITE_01.pdf',
          destination: '/',
        },
      ],
      beforeFiles: [
        {
          source: '/tos',
          destination: '/GifmeBeer_Terms_and_Conditions.pdf',
        },
      ],
    };
  },
};

module.exports = nextConfig;

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
  async redirects() {
    return [
      {
        source: '/raffle2',
        destination:
          'https://docs.google.com/spreadsheets/d/1HBpoXaZIAuOJUSgWvn39tB1VnO35tr1rLyaeQT-f_4c/edit?usp=sharing',
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;

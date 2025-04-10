/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          destination: 'https://server.gifmebeer.com/',
        },
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

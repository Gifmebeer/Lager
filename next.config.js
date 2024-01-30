/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    return config;
  },
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
  productionBrowserSourceMaps: false, // Disable source maps in development
  optimizeFonts: false, // Disable font optimization
  swcMinify: true,
};

module.exports = nextConfig;

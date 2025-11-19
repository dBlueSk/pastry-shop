/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/pastry-shop',
  assetPrefix: '/pastry-shop/', // required for static export on GitHub Pages

  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

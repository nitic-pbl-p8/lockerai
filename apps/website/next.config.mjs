/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  reactStrictMode: true,
  transpilePackages: ['@lockerai/core'],
};

export default config;

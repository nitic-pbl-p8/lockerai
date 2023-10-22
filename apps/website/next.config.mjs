/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    typedRoutes: true,
  },
  reactStrictMode: true,
  transpilePackages: ['@lockerai/core'],
};

export default config;

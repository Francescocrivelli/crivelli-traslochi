/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true,
      domains: ['localhost'],
    },
    output: 'export',
    trailingSlash: true,
  }
  
  module.exports = nextConfig
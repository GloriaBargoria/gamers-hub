/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co'],
  },
  experimental: {
    esmExternals: false
  },
}

module.exports = nextConfig

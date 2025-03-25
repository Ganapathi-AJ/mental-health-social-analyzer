/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['pbs.twimg.com', 'platform-lookaside.fbsbx.com', 'scontent.cdninstagram.com'],
  },
}

module.exports = nextConfig
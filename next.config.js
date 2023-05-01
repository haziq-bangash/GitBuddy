/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// next.config.js

module.exports = {
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
}

// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/.*',
      },
    ],
  },
}


module.exports = nextConfig

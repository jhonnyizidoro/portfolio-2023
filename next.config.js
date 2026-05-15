const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { qualities: [50] },
  i18n: {
    locales: ['en-US', 'pt-BR'],
    localeDetection: false,
    defaultLocale: 'en-US',
  },
  sassOptions: {
    loadPaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig

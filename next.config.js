/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cards.scryfall.io',
        port: '',
        pathname: '**',
      },
    ]
  },
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr'
  }
}

module.exports = nextConfig

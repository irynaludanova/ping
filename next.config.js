/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ru", "ua"],
    defaultLocale: "ru",
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
        /**domains: ['cafekoppstorage.blob.core.windows.net'],*/
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'cafekoppstorage.blob.core.windows.net',
            port: '',
            pathname: '/*/*',
        },],
    },
}


module.exports = nextConfig

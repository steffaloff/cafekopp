/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const azureimages = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'cafekoppstorage.blob.core.windows.net',
            port: '',
            pathname: '/pasmurt/**',
        }]
    }
}

module.exports = nextConfig, azureimages

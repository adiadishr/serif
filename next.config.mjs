/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.clerk.com',
                pathname: '/**', // Allow all paths from the hostname
            },
            {
                protocol: 'https',
                hostname: 'combative-grouse-246.convex.cloud',
                pathname: '/**', // wildcard to allow all paths
            },
        ],
    },
};

export default nextConfig;

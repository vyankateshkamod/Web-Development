/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cubanvr.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;

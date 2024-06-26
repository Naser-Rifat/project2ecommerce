/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
    images: {
      unoptimized: true ,
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cdn.dummyjson.com',
              pathname: '**',
            },
          ],
      },
};

export default nextConfig;

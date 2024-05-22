/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  generateBuildId: async () => {
    return 'pia';
  },
};

export default nextConfig;

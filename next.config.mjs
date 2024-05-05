/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  generateBuildId: async () => {
    return 'test_brandID';
  }
};

export default nextConfig;

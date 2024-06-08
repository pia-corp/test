/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  generateBuildId: async () => {
    return 'pia';
  },
  // キャッシュの有効化
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.cache = {
        type: 'filesystem',
        allowCollectingMemory: true,
        buildDependencies: {
          config: [__filename],
        },
      };
    }
    return config;
  },
  // Image Optimization
  images: {
    domains: ['your-image-source.com'], // ドメイン名は適宜変更してください
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // 静的ファイルのキャッシュ設定
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  // CSS Minification
  cssLoaderOptions: {
    importLoaders: 1,
    modules: {
      localIdentName: '[hash:base64:5]',
    },
  },
  // ビルド並列化
  experimental: {
    swcLoader: true,
    swcMinify: true,
    cpus: 4,
    concurrentFeatures: true,
    serverComponents: true,
  },
};

export default nextConfig;

/** @type {import('next-sitemap').IConfig} */
const {format} = require('date-fns');

const isIgnorePath = (path) => {
  // 無視したいパスの条件をここに記述
  const ignorePaths = ['/ignore-this-path', '/and-this-one'];
  return ignorePaths.includes(path);
};

const customLastmod = (path) => {
  // 特定のパスに対してカスタムの最終更新日を設定する
  const lastModDates = {
    '/some-path': '2023-01-01',
  };
  return lastModDates[path] || format(new Date(), 'yyyy-MM-dd');
};

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.melloew.jp',
  outDir: './out',
  generateRobotsTxt: true,
  transform: async (config, path) => {
    if (isIgnorePath(path)) {
      return null;
    }

    return {
      loc: encodeURI(path),
      lastmod: customLastmod(path),
      priority: 0.7,
      changefreq: 'weekly',
    };
  },
};

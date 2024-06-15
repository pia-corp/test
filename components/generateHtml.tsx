import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';
import { minify } from 'html-minifier-terser';

/**
 * テンプレートからHTMLを生成し、最小化する関数
 * @param contents テンプレートに渡すコンテンツ
 * @returns 最小化されたHTMLとメタタグ
 */
export const generateHtml = async (contents: any): Promise<{ html_mini: string, metaTags: string }> => {
  const templatePath = path.join(process.cwd(), 'templates', 'news', 'list.hbs');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template file ${templatePath} not found`);
  }

  const metaTagsPath = path.join(process.cwd(), 'templates', 'import.html');
  const metaTags = fs.readFileSync(metaTagsPath, 'utf8');
  const template = fs.readFileSync(templatePath, 'utf8');
  const templateCache = Handlebars.compile(template);
  const html = templateCache(contents);

  const html_mini = await minify(html, {
    removeComments: true,
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
  });

  return { html_mini, metaTags };
};

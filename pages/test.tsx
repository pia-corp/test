import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import { client } from "@/libs/client";
import { GetStaticProps } from 'next';
import { INewsProps, INewsItem } from '@/interface/index';
import { minify } from 'html-minifier-terser';
import Handlebars from 'handlebars';
import parse from 'html-react-parser';

export const getStaticProps: GetStaticProps = async () => {
  const data: INewsProps = await client.get({ endpoint: 'news', queries: { offset: 0, limit: parseInt(process.env.PER_PAGE as string) }});
  const metaTagsPath = path.join(process.cwd(), 'template', 'import.html');
  const metaTags = fs.readFileSync(metaTagsPath, 'utf8');

  // Handlebarsテンプレートを読み込む
  const template = fs.readFileSync('template/test.hbs', 'utf-8');

  // Handlebarsテンプレートにデータを適用する
  let html = Handlebars.compile(template)(data);

  html = await minify(html, {
    removeComments: true,
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
  });

  return {
    props: {
      html,
      metaTags
    }
  };
};

export default function Home({html, metaTags}) {
  return (
    <>
      <Head>
        {parse(metaTags)}
      </Head>
      <div dangerouslySetInnerHTML={{__html: html}} />
    </>
  );
}

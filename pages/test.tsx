import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Handlebars from 'handlebars';
import parse from 'html-react-parser';
import { client } from "@/libs/client";
import { GetStaticProps } from 'next';
import { INewsProps, INewsItem } from '@/interface/index';
import { minify } from 'html-minifier-terser';

export const config = {
  unstable_runtimeJS: false
};

type Props = {
  html_mini: string;
  metaTags: string;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const perPage = parseInt(process.env.PER_PAGE as string);
  if (isNaN(perPage)) {
    throw new Error('process.env.PER_PAGE must be a valid number');
  }

  const data: INewsProps = await client.get({ endpoint: 'news', queries: { offset: 0, limit: perPage }});
  const metaTagsPath = path.join(process.cwd(), 'template', 'import.html');
  const metaTags = fs.readFileSync(metaTagsPath, 'utf8');

  const template = fs.readFileSync('template/test.hbs', 'utf-8');
  const templateCache = Handlebars.compile(template);
  const html = templateCache(data);

  const html_mini = await minify(html, {
    removeComments: true,
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
  });

  return {
    props: {
      html_mini,
      metaTags
    }
  };
};

export default function Home({ html_mini, metaTags }: Props) {
  return (
    <>
      <Head>
        {parse(metaTags)}
      </Head>
      {parse(html_mini)}
    </>
  );
}

import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Handlebars from 'handlebars';
import parse from 'html-react-parser';
import sanitize from 'sanitize-html';
import {client} from '@/libs/client';
import styles from '@/styles/Home.module.css';
import {GetStaticPropsContext, GetStaticPropsResult} from 'next';
import { minify } from 'html-minifier-terser';

export const config = {
  unstable_runtimeJS: false
};

type Props = {
  news: NewsData,
  html_mini: string;
  metaTags: string;
};

type NewsData = {
  id: string;
  title: string;
  publishedAt: string;
  body: string;
  img?: string;
}

const fetchNewsData = async (id: string): Promise<NewsData> => {
  const data = await client.get({endpoint: 'news', contentId: id});
  return data;
};

export const getStaticProps = async (context: GetStaticPropsContext<any>): Promise<GetStaticPropsResult<Props>> => {
  const id = context.params.id;
  const news = await fetchNewsData(id);
  let contents = {
    contents: [
    news
  ]};
  const templatePath = path.join(process.cwd(), 'template', 'news', 'list.hbs');

  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template file ${templatePath} not found`);
  }

  const metaTagsPath = path.join(process.cwd(), 'template', 'import.html');
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

  return {
    props: {
      news,
      html_mini,
      metaTags
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({endpoint: 'news'});
  const paths = data.contents.map((content: {id: string}) => ({params: {id: content.id}}));

  return {
    paths,
    fallback: false,
  };
};

export default function NewsId({ news, html_mini, metaTags }: Props) {
  const sanitizedHtml = sanitize(news.body);
  return (
    <>
      <Head>
        <title>{news.title} | サイト名</title>
        {parse(metaTags)}
      </Head>
      {parse(html_mini)}
    </>
  );
}

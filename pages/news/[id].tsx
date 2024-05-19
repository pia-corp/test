import fs from 'fs';
import path from 'path';
import {client} from '@/libs/client';
import CustomHead from '@/components/head';
import sanitize from 'sanitize-html';
import styles from '@/styles/Home.module.css';
import {GetStaticPropsContext, GetStaticPropsResult} from 'next';
import {INewsProps} from '@/interface/page/index';
import Handlebars from 'handlebars';

type Props = {
  html: string;
};

const fetchNewsData = async (id: string): Promise<INewsProps> => {
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

  const template = fs.readFileSync(templatePath, 'utf8');
  const html = Handlebars.compile(template)(contents);

  return {
    props: {
      html,
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

interface NewsIdProps {
  html: string;
}

export default function NewsId({ html }: NewsIdProps) {
  return <div dangerouslySetInnerHTML={{__html: html}} />;
}

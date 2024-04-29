import { client } from "@/libs/client";
import CustomHead from '@/components/head';
import sanitize from 'sanitize-html';
import styles from "@/styles/Home.module.css";
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { INewsProps } from '@/interface/page/index';

type Props = {
  news: INewsProps;
};

const fetchNewsData = async (id: string): Promise<INewsProps> => {
  const data = await client.get({ endpoint: "news", contentId: id });
  return data;
};

export const getStaticProps = async (context: GetStaticPropsContext<any>): Promise<GetStaticPropsResult<Props>> => {
  const id = context.params.id;
  const news = await fetchNewsData(id);

  return {
    props: {
      news,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });
  const paths = data.contents.map((content: { id: string }) => ({ params: { id: content.id } }));
  return {
    paths,
    fallback: false,
  }
};

export default function NewsId({ news }: Props) {
  const sanitizedHtml = sanitize(news.body);
  return (
    <>
      <CustomHead title={news.title} />
      <main className={styles.main}>
        <h1 className={styles.title}>{news.title}</h1>
        <p className={styles.publishedAt}>{news.publishedAt}</p>
        <div className={styles.body} dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
      </main>
    </>
  )
};

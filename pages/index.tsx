import Link from "next/link";
// import Head from 'next/head';
import CustomHead from '@/components/head';
import { client } from "@/libs/client";
import { INewsProps, INewsItem } from '@/interface/index';
import { GetStaticProps } from 'next';
import styles from "@/styles/Home.module.css";

export const config = {
  unstable_runtimeJS: false
};

export const getStaticProps: GetStaticProps = async () => {
  const data: INewsProps = await client.get({
    endpoint: 'news',
    queries: {
      offset: 0,
      limit: parseInt(process.env.PER_PAGE as string),
      filters: 'category[equals]test'
    }
  });

  return {
    props: {
      news: data.contents,
      limit: data.limit,
      totalCount: data.totalCount
    }
  };
};

export default function Home ({ news }: { news: INewsItem[] }) {
  const title = "これはWebページのタイトル";
  return (
    <>
      <CustomHead title={title}  />
      <main className={styles.main}>
        <div>
          <ul>
            {news.map((newsItem) => (
              <li key={newsItem.id}>
                <Link href={`news/${newsItem.id}`}>
                  {newsItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href={`news/page/1`}>一覧</Link>
      </main>
    </>
  );
};

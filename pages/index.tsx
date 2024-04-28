import Link from "next/link";
import { client } from "@/libs/client";
import { INewsProps, INewsItem } from '@/interface/index';
import { GetStaticProps } from 'next';
import styles from "@/styles/Home.module.css";

export const getStaticProps: GetStaticProps = async () => {
  const data: INewsProps = await client.get({ endpoint: 'news', queries: { offset: 0, limit: parseInt(process.env.PER_PAGE as string) }});

  return {
    props: {
      news: data.contents,
      limit: data.limit,
      totalCount: data.totalCount
    }
  };
};

export default function Home ({ news }: { news:INewsItem[] }) {
  return (
    <main className={styles.main}>
      <div>
        {news.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`news/${newsItem.id}`}>
              {newsItem.title}
            </Link>
          </li>
        ))}
      </div>
      <Link href={`news/page/1`}>一覧</Link>
    </main>
  );
};

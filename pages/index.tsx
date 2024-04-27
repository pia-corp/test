import Link from "next/link";
import { client } from "../libs/client";
import { Pagination } from "../components/Pagination";
import styles from "../styles/Home.module.css";

interface NewsItem {
  id: string;
  title: string;
}

interface NewsData {
  contents: NewsItem[];
  totalCount: number;
}

export const getStaticProps = async () => {
  const data: NewsData = await client.get({ endpoint: 'news', queries: { offset: 0, limit: 5 }});
  return {
    props: {
      news: data.contents,
      totalCount: data.totalCount
    }
  };
};

export default function Home({ news }: { news: NewsItem[] }, totalCount: number) {
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
  		{/* <Pagination totalCount={totalCount} /> */}
    </main>
  );
}

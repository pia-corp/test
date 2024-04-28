import Link from 'next/link';
import { Pagination } from '@/components/Pagination';
import { client } from "@/libs/client";
import { GetStaticPropsContext } from 'next';
import { IHomeProps } from '@/interface/index';
import styles from "@/styles/Home.module.css";

interface HomeProps {
  news: IHomeProps[];
  totalCount: number;
  current_page: number;
}

export default function BlogPageId({ news, totalCount, current_page }: HomeProps) {
  return (
    <main className={styles.main}>
      <div>
        <ul>
          {news.map(news => (
            <li key={news.id}>
              <Link href={`/news/${news.id}`}>{news.title}</Link>
            </li>
          ))}
        </ul>
        <Pagination totalCount={totalCount} current_page={current_page} />
        <p>Total Item: {totalCount}</p>
        <p>Current page: {current_page}</p>
      </div>
    </main>
  );
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const repos = await client.get({ endpoint: "news" });
  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = range(1, Math.ceil(repos.totalCount / 3)).map((repo) => `/news/page/${repo}`);

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context: GetStaticPropsContext) => {
	const id = context.params?.id;
  const current_page:number = parseInt(id);
	let data;
  // console.log(id); // current page
  // console.log(data);

	if (typeof id === 'string') {
		const numericId = parseInt(id, 10);
		if (!isNaN(numericId)) {
			data = await client.get({ endpoint: "news", queries: { offset: (numericId - 1) * 2, limit: 2 } });
		}
	}
		  // const data = await client.get({ endpoint: "news", queries: { offset: (id - 1) * 3, limit: 3 } });

  return {
    props: {
      news: data.contents,
      totalCount: data.totalCount,
      current_page: current_page
    },
  };
};

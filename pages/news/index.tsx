import Link from 'next/link';
import { client } from "@/libs/client";
import { Pagination } from '@/components/Pagination';
import { INewsProps, INewsItem } from '@/interface/index';
import { GetStaticProps, GetStaticPaths } from 'next';
import styles from "@/styles/Home.module.css";

interface NewsProps {
  contents: INewsItem[];
  limit: number;
  totalCount: number;
}

interface HomeProps {
  news: INewsItem[];
  limit: number;
  total_pages: number;
  pageNumber: number;
}

export default function Home({ news, total_pages, pageNumber }: HomeProps) {
	return (
    <main className={styles.main}>
      <div>
        <ul>
          {news.map(newsItem => (
            <li key={newsItem.id}>
              <Link href={`/news/${newsItem.id}`}>{newsItem.title}</Link>
            </li>
          ))}
        </ul>
        <Pagination total_pages={total_pages} />
      </div>

      <div>Current Page: {pageNumber}</div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  // paramsからページ番号を取得
  const pageNumber = params?.pageNumber ?? 1;

  // ページ番号に基づいて必要なデータを取得
  const data: INewsProps = await client.get({ endpoint: 'news', queries: { offset: 0, limit: parseInt(process.env.PER_PAGE as string) }});
  const totalCount = await client.getAllContentIds({ endpoint: 'news', filters: 'category[equals]sq7atso78' });

	return {
    props: {
      news: data.contents,
      limit: data.limit,
      totalCount: totalCount,
      pageNumber: pageNumber
    }
  };
};

export const getStaticPaths = async () => {
  // ページ番号を取得する必要がある範囲を取得する
  const totalCount = await client.getAllContentIds({ endpoint: 'news', filters: 'category[equals]sq7atso78' });

  const paths = Array.from({ length: totalCount }, (_, index) => ({ params: { pageNumber: (index + 1).toString() } }));

  return {
    paths,
    fallback: false // 未定義のパスは404を返す
  };
};

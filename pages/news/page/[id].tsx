import Link from 'next/link';
import CustomHead from '@/components/CustomHead';
import { Pagination } from '@/components/Pagination';
import { fetchNews } from '@/components/fetchNews';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { convertToJSTDate } from '@/components/utils/dateFormatter';
import { HomeProps } from '@/interfaces/page/index';
import styles from '@/styles/Home.module.css';

export const config = {
  unstable_runtimeJS: false
};

const BlogPageId = ({ news, totalCount, currentPage }: HomeProps) => {
  return (
    <>
      {news.map(item => (
        <CustomHead key={item.id} title={item.title} />
      ))}
      <main className={styles.main}>
        <div>
          <ul>
            {news.map(item => (
              <li key={item.id}>
                <Link href={`/news/${item.id}`}>{item.createdAt}　{item.title}</Link>
              </li>
            ))}
          </ul>
          <Pagination totalCount={totalCount} currentPage={currentPage} />
          <p>Total Items: {totalCount}</p>
          <p>Current page: {currentPage}</p>
        </div>
      </main>
    </>
  );
};

export const getStaticPaths = async () => {
  const data = await fetchNews();
  const totalCount = data.totalCount;
  const totalPages = Math.ceil(totalCount / 3);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { id: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (context: GetStaticPropsContext): Promise<GetStaticPropsResult<HomeProps>> => {
//   const { id } = context.params!;
//   const currentPage = parseInt(id as string, 10) || 1;
//   const dataArray = await fetchNews(currentPage);
//   console.log(dataArray.contents[0].createdAt);

//   return {
//     props: {
//       news: dataArray.contents,
//       totalCount: dataArray.totalCount,
//       currentPage,
//     },
//   };
// };

export const getStaticProps = async (context: GetStaticPropsContext): Promise<GetStaticPropsResult<HomeProps>> => {
  const { id } = context.params!;
  const currentPage = parseInt(id as string, 10) || 1;
  const dataArray = await fetchNews(currentPage);

  // const transformedContent = {
  //   id: dataArray.contents[0].id,
  //   title: dataArray.contents[0].title,
  //   body: dataArray.contents[0].body,
  //   createdAt: convertToJSTDate(dataArray.contents[0].createdAt),
  //   updatedAt: convertToJSTDate(dataArray.contents[0].updatedAt),
  //   publishedAt: convertToJSTDate(dataArray.contents[0].publishedAt),
  //   revisedAt: convertToJSTDate(dataArray.contents[0].revisedAt),
  // };
  // console.log(transformedContent);

  return {
    props: {
      news: dataArray.contents,
      totalCount: dataArray.totalCount,
      currentPage,
    },
  };
};

export default BlogPageId;

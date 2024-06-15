import { client, ENDPOINT, DOMAINNAME } from '@/libs/client';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { fetchNewsData } from '@/components/fetchNewsData';
import { generateHtml } from '@/components/generateHtml';
import { NewsData, Props } from '@/types';
import NewsId from '@/components/NewsId';

// hydration処理の無効化
export const config = {
  unstable_runtimeJS: false
};

export const getStaticProps = async (context: GetStaticPropsContext<any>): Promise<GetStaticPropsResult<Props>> => {
  const id = context.params.id as string;
  const dataArray = await fetchNewsData(id);

  const contents = { contents: [dataArray] };
  const { html_mini, metaTags } = await generateHtml(contents);

  return {
    props: {
      dataArray,
      html_mini,
      metaTags
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.getAllContents({
    endpoint: ENDPOINT,
    queries: {
      filters: `category[equals]${DOMAINNAME}`,
      orders: '-createdAt'
    }
  });

  const paths = data.map((content: { id: string }) => ({ params: { id: content.id } }));
  return {
    paths,
    fallback: false,
  };
};

export default NewsId;

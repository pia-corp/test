import {client, ENDPOINT, DOMAINNAME} from '@/libs/client';
import {NewsData} from '@/types';

/**
 * ニュースデータを取得する非同期関数
 * @param id ニュースID
 * @returns ニュースデータ
 */
export const fetchNewsData = async (id: string): Promise<NewsData> => {
  return await client.get({endpoint: ENDPOINT});
};

export const fetchAllContentsData = async (): Promise<NewsData> => {
  return await client.getAllContents({
    endpoint: ENDPOINT,
    queries: {
      filters: `category[equals]${DOMAINNAME}`,
      orders: '-createdAt',
    },
  });
};

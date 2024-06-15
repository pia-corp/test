import {client, ENDPOINT} from '@/libs/client';
import {NewsData} from '@/types';

/**
 * ニュースデータを取得する非同期関数
 * @param id ニュースID
 * @returns ニュースデータ
 */
export const fetchNewsData = async (id: string): Promise<NewsData> => {
  return await client.get({endpoint: ENDPOINT, contentId: id});
};

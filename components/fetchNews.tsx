import {client, DOMAINNAME} from '@/libs/client';

export const fetchNews = async (page: number = 1) => {
  const data = await client.get({
    endpoint: 'news',
    queries: {
      filters: `category[equals]${DOMAINNAME}`,
      orders: '-createdAt',
      offset: (page - 1) * 3,
      limit: 3,
    },
  });
  return data;
};

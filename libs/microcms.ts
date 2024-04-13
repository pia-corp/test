import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from 'microcms-js-sdk';
import { notFound } from 'next/navigation';

export type Tag = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

export type Writer = {
  title: string;
  category?: Tag[];
  external: boolean;
  url: string;
  image?: MicroCMSImage;
} & MicroCMSContentId &
  MicroCMSDate;

export type Blog = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  category?: Tag[];
  writer?: Writer;
};

export type Article = Blog & MicroCMSContentId & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// get blog list
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Blog>({
      endpoint: 'blogs',
      queries,
    })
    .catch(notFound);
  return listData;
};

// get blog detail
export const getDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client
    .getListDetail<Blog>({
      endpoint: 'blogs',
      contentId,
      queries,
    })
    .catch(notFound);

  return detailData;
};

// get tag list
export const getTagList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Tag>({
      endpoint: 'brand',
      queries,
    })
    .catch(notFound);

  return listData;
};

// get tag detail
export const getTag = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client
    .getListDetail<Tag>({
      endpoint: 'brand',
      contentId,
      queries,
    })
    .catch(notFound);

  return detailData;
};

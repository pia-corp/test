export type NewsData = {
  id: string;
  title: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  revisedAt?: string;
  body: string;
  img?: string;
};

export type Props = {
  dataArray: NewsData;
  html_mini: string;
  metaTags: string;
};

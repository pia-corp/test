export interface INewsProps {
  id: string;
  title: string;
  publishedAt: string;
  body: string;
}

export interface IHomeProps {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
}

export interface HomeProps {
  news: IHomeProps[];
  totalCount: number;
  currentPage: number;
}

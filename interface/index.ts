export interface IHomeProps {
  id: string;
  title: string;
}

export interface INewsProps {
  contents: INewsItem[];
  totalCount: number;
  offset: number;
  limit: number;
}

export interface INewsItem {
  id: string;
  title: string;
  body: string;
}

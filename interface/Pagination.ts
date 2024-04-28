export interface IPaginationProps {
  currentPage: number;
  totalCount: number;
  postPerPage?: number;
  parentSlug?: string;
  rewriteSlug?: string;
};

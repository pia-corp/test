import Link from 'next/link';
import { GetStaticProps } from 'next';
import { PAGE_NAVI } from "@/const/setting";
// import { IPaginationProps } from "@/interface/Pagination";
import styles_pagination from "@/styles/pagination.module.css";


export const Pagination = ({ totalCount, current_page }) => {
  const ITEMS_PER_PAGE = 2;
  const total_pages = Math.ceil(totalCount / ITEMS_PER_PAGE);
  // console.log(typeof totalCount) // number
  // console.log(typeof current_page) // string

  const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

  const generateListItem = (page_number: number) => {
    if (page_number === 1) {
      return (
        <li key={page_number}>
          <Link href={`/news/page/${page_number}`}>{page_number}</Link>
        </li>
      );
    }
    if (page_number === current_page) {
      return (
        <li className={styles_pagination.active} key={page_number}>
          <Link href={`/news/page/${page_number}`}>{page_number}</Link>
        </li>
      );
    }
    if (page_number === current_page + 1 || page_number === current_page - 1) {
      return (
        <li key={page_number}>
          <Link href={`/news/page/${page_number}`}>{page_number}</Link>
        </li>
      )
    }
    if (page_number === total_pages) {
      return (
        <li key={page_number}>
          <Link href={`/news/page/${page_number}`}>{page_number}</Link>
        </li>
      )
    }
    if (page_number !== 1 && page_number === current_page - 2) {
      return (
        <li key={page_number}>
          <span>・・・</span>
        </li>
      )
    }
    if (page_number !== total_pages && page_number === current_page + 2) {
      return (
        <li key={page_number}>
          <span>・・・</span>
        </li>
      )
    }
    return null;
  };

  return (
    <div>
      <ul className={styles_pagination.pagination}>
        {range(1, total_pages).map((number) => (
          generateListItem(number)
        ))}
      </ul>
    </div>
  );
};

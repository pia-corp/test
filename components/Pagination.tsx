import Link from 'next/link';

interface PaginationProps {
  totalCount: number;
}

export const Pagination = ({ totalCount }: PaginationProps) => {
  const PER_PAGE = 1;

	// const range = (start: number, end: number) =>
  //       [...Array(end - start + 1)].map((_, i) => start + i)

	const range = (start: number, end: number) => {
		// start = 0;
		// end = 4;
		if (start > end) {
			return []; // startがendより大きい場合は空の配列を返す
		}

		return [...Array(end - start + 1)].map((_, i) => start + i);
	};

  return (
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={`/news/page/${number}`}>{number}</Link>
        </li>
      ))}
    </ul>
  );
};

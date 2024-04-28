type PageNaviProps = {
  FIRST_TXT: string;
  LAST_TXT: string;
  PREV_TXT: string;
  NEXT_TXT: string;
  ITEMS: number;
  POSTS_PER_PAGE: number;
}

export const PAGE_NAVI:PageNaviProps = {
  FIRST_TXT : "≪",
  LAST_TXT : "≫",
  PREV_TXT : "<",
  NEXT_TXT : ">",
  ITEMS: 4,
  POSTS_PER_PAGE: 2
}

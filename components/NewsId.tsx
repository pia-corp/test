import Head from 'next/head';
import parse from 'html-react-parser';
import sanitize from 'sanitize-html';
import {Props} from '@/types';

/**
 * ニュースIDページのコンポーネント
 * @param props コンポーネントのプロパティ
 * @returns ニュースIDページのJSX要素
 */
export default function NewsId({dataArray, html_mini, metaTags}: Props) {
  const sanitizedHtml = sanitize(dataArray.body);

  return (
    <>
      <Head>
        <title>{dataArray.title} | サイト名</title>
        {parse(metaTags)}
      </Head>
      {parse(html_mini)}
    </>
  );
}

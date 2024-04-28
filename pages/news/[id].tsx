import { client } from "../../libs/client";
import sanitize from 'sanitize-html';
import styles from "../../styles/Home.module.css";
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';

interface Content {
  id: string;
}

interface News {
  id: string;
  title: string;
  publishedAt: string;
  body: string;
}

export const getStaticProps = async (context: GetStaticPropsContext<any>): Promise<GetStaticPropsResult<any>> => {
	const id = context.params.id;
	const data = await client.get({ endpoint: "news", contentId: id });

	return {
		props: {
			news: data
		}
	};
};

export const getStaticPaths = async () => {
	const data = await client.get({ endpoint: "news" });
	const paths = data.contents.map((content: Content) => `/news/${content.id}`);
	return {
		paths,
		fallback: false
	}
};

export default function NewsId({ news }: { news: News }) {
	const sanitizedHtml = sanitize(news.body);
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>{news.title}</h1>
			<p className={styles.publishedAt}>{news.publishedAt}</p>
			<div className={styles.body} dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
		</main>
	)
};

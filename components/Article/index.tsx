import { formatRichText } from '@/libs/utils';
import { type Article } from '@/libs/microcms';
import styles from './index.module.css';

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <h1 className={styles.title}>test</h1>
    </main>
  );
}

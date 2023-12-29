import React from 'react';
import styles from './styles.module.scss';

const Separator = () => <div className={styles.separator} />;

interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: Date;
}

interface NewsListProps {
  newsItems: NewsItem[];
}

export const NewsList: React.FC<NewsListProps> = ({ newsItems }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>News of the Realm</h2>
      <Separator />
      <ul className={styles.newsContainer}>
        {newsItems.map((item, index) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            {index < newsItems.length - 1 && <Separator />}
          </li>
        ))}
      </ul>
    </div>
  );
};

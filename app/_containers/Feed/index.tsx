import React from 'react';
import { Raven, RavenProps } from '../Raven';
import styles from './styles.module.scss';

interface FeedProps {
  messages: RavenProps[];
}

const Feed: React.FC<FeedProps> = ({ messages }) => {
  return (
    <ul className={styles.container}>
      {messages.map((message) => (
        <li key={message.id} >
          <Raven {...message} />
        </li>
      ))}
    </ul>
  );
};

export default Feed;

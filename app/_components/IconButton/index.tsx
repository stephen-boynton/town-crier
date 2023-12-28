import React from 'react';
import styles from './styles.module.scss'

interface IconButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.container} onClick={onClick}>
      {children}
    </button>
  );
};

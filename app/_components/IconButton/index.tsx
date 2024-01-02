import React from 'react';
import styles from './styles.module.scss'
import * as Icons from '@radix-ui/react-icons';
import { IconProps } from '@radix-ui/react-icons/dist/types';

interface IconButtonProps extends IconProps {
  onClick: () => void;
  icon: keyof typeof Icons;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, ...iconProps }) => {
  const Icon = Icons[icon];
  return (
    <button className={styles.container} onClick={onClick}>
      <Icon {...iconProps} />
    </button>
  );
};

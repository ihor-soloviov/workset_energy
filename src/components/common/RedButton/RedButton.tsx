import React, { ReactNode } from 'react';
import styles from './RedButton.module.css';

type Props = {
  children: ReactNode;
};

const RedButton: React.FC<Props> = ({ children }) => {
  return <button className={styles.redButton}>{children}</button>;
};

export default RedButton;

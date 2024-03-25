import React, { Component } from 'react';
import styles from './RedHelpItem.module.css';
import { RedHelp } from '@/types/infoTypes';
import Image from 'next/image';

type Props = {
  item: RedHelp;
};

const RedHelpItem: React.FC<Props> = ({ item: { title, text, icon } }) => {
  return (
    <li className={styles.redHelpItem}>
      <div className={styles.itemHead}>
        <div className={styles.icon}>{React.createElement(icon)}</div>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.action}></div>
    </li>
  );
};

export default RedHelpItem;

import React, { Component } from 'react';
import styles from './RedHelpItem.module.css';
import { RedHelp } from '@/types/infoTypes';
import Image from 'next/image';
import { items } from '../items';

type Props = {
  item: RedHelp;
};

const RedHelpItem: React.FC<Props> = ({
  item: { title, text, icon, href, arrayOfLinks },
}) => {
  return (
    <li className={styles.redHelpItem}>
      <div className={styles.itemHead}>
        <div className={styles.icon}>{React.createElement(icon)}</div>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.action}>
        {href && (
          <a href={href.linkTo} target="_blank" rel="noopener noreferrer">
            {href.title}
          </a>
        )}
        {arrayOfLinks &&
          arrayOfLinks.map(({ icon, linkTo }) => (
            <a
              key={linkTo}
              href={linkTo}
              target="_blank"
              rel="noopener noreferrer"
            >
              {React.createElement(icon)}
            </a>
          ))}
      </div>
    </li>
  );
};

export default RedHelpItem;

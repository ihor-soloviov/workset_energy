import React, { Component } from 'react';
import styles from './RedHelpItem.module.css';
import { RedHelp } from '@/types/infoTypes';

type Props = {
  item: RedHelp;
};

const RedHelpItem: React.FC<Props> = ({
  item: { title, text, icon, href, arrayOfLinks },
}) => (
  <li className={styles.redHelpItem}>
    <div className={styles.itemHead}>
      <div className={styles.icon}>{React.createElement(icon)}</div>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.text}>{text}</p>
    </div>
    <div className={styles.actions}>
      {href && (
        <a
          className={`${styles.contactLink} ${styles.animated}`}
          href={href.linkTo}
          target="_blank"
          rel="noopener noreferrer"
        >
          {href.title}
        </a>
      )}
      {arrayOfLinks &&
        arrayOfLinks.map(({ icon, linkTo }) => (
          <a
            key={linkTo}
            className={`${styles.socialLink} ${styles.animated}`}
            href={linkTo}
            target="_blank"
            rel="noopener noreferrer"
          >
            {React.createElement(
              icon,
              { className: `${styles.socialIcon} ${styles.animated}` },
              null,
            )}
          </a>
        ))}
    </div>
  </li>
);

export default RedHelpItem;

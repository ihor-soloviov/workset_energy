import React from 'react';
import styles from './MobileContactList.module.css';
import { inter } from '@/utils/fonts';
import { contactLinkItems } from './mobileContactItems';

const MobileContactList = () => {
  return (
    <ul className={`${styles.menuList} ${inter.className}`}>
      {contactLinkItems.map(({ text, title, href }) => (
        <li key={title} className={styles.menuItem}>
          <h3 className={styles.menuItemTitle}>{title}</h3>
          {title === 'Address' ? (
            <p className={styles.menuLink}>{text}</p>
          ) : (
            <a href={href} className={styles.menuLink}>
              {text}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MobileContactList;

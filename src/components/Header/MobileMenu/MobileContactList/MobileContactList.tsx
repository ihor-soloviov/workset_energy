import React from 'react';
import styles from './MobileContactList.module.css';
import { inter } from '@/utils/fonts';
const MobileContactList = () => {
  return (
    <ul className={`${styles.menuList} ${inter.className}`}>
      <li className={styles.menuItem}>
        <h3 className={styles.menuItemTitle}>Address</h3>
        <p className={styles.menuLink}>Magirus-Deutz-Str, 1289077 Ulm</p>
      </li>
      <li className={styles.menuItem}>
        <h3 className={styles.menuItemTitle}>E-mail</h3>
        <a href="mailto:office@work-set.eu" className={styles.menuLink}>
          office@work-set.eu
        </a>
      </li>
      <li className={styles.menuItem}>
        <h3 className={styles.menuItemTitle}>Telefonnummer</h3>
        <a href="tel:+4973114613210" className={styles.menuLink}>
          +49-73-114-613-210
        </a>
      </li>
    </ul>
  );
};

export default MobileContactList;

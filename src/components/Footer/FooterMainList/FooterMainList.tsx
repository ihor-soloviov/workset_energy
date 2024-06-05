import Link from 'next/link';
import React from 'react';
import styles from './FooterMainList.module.css';
import { inter } from '@/utils/fonts';
import { navLinkItems } from './footerMainItems';

const FooterMainList = () => {
  return (
    <ul className={styles.footerMainList}>
      {navLinkItems.map(({ text, links, href }) => (
        <li className={styles.footerMainItem} key={text}>
          <Link href={href} className={styles.footerMainLink}>
            {text}
          </Link>
          <ul className={`${styles.footerList} ${inter.className}`}>
            {links.map(({ text, href }) => (
              <li className={styles.footerItem} key={text}>
                <Link className={styles.footerLink} href={href}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default FooterMainList;

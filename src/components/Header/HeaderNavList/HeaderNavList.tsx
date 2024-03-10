import Link from 'next/link';
import React from 'react';
import styles from './HeaderNavList.module.css';
import { inter } from '@/utils/fonts';

export type NavLinkItem = {
  href: string;
  text: string;
};

export const navLinkItems: NavLinkItem[] = [
  { href: '/pvsystem', text: 'PV-System' },
  { href: '/stormspeicher', text: 'Stormspeicher' },
  { href: '/wallbox', text: 'Wallbox' },
  { href: '/karrier', text: 'Karrier' },
  { href: '/uberuns', text: 'Über uns' },
];

const HeaderNavList = () => {
  return (
    <ul className={`${styles.headerList} ${inter.className}`}>
      {navLinkItems.map(({ text, href }) => (
        <li key={text} className={styles.headerItem}>
          <Link href={href} className={styles.headerNavLink}>
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderNavList;

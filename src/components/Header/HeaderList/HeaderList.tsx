'use client';

import Link from 'next/link';
import React from 'react';
import styles from './HeaderList.module.css';
import { inter } from '@/utils/fonts';
type NavLinkItem = {
  href: string;
  text: string;
};

const HeaderList = () => {
  const navLinkItems: NavLinkItem[] = [
    { href: '/pvsystem', text: 'PV-System' },
    { href: '/stormspeicher', text: 'Stormspeicher' },
    { href: '/wallbox', text: 'Wallbox' },
    { href: '/karrier', text: 'Karrier' },
    { href: '/uberuns', text: 'Über uns' },
  ];

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

export default HeaderList;

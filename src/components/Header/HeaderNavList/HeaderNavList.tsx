import Link from 'next/link';
import React from 'react';
import styles from './HeaderNavList.module.css';
import { inter } from '@/utils/fonts';
import { usePathname } from 'next/navigation';
import { useThankYouStore } from '@/store/hero-store';
import { navLinkItems } from './navlist';

const HeaderNavList = () => {
  const pathname = usePathname();

  const { toggleStyles, isStylesChanged } = useThankYouStore();

  const handleLinkClick = () => isStylesChanged && toggleStyles();

  return (
    <ul className={`${styles.headerList} ${inter.className}`}>
      {navLinkItems.map(({ title, linkTo }) => (
        <li
          key={title}
          className={`${styles.headerItem} ${pathname === linkTo ? styles.active : ''} ${isStylesChanged ? styles.blackStyle : ''}`}
        >
          <Link
            onClick={handleLinkClick}
            href={linkTo}
            className={`${styles.headerNavLink} ${isStylesChanged ? styles.blackStyle : ''}`}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderNavList;

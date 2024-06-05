import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './HeaderNavList.module.css';
import { inter } from '@/utils/fonts';
import { usePathname } from 'next/navigation';
import { navLinkItems } from './navLinkItems';
import { blackList } from '@/utils/pathnames';

const HeaderNavList = () => {
  const [isBlack, setIsBlack] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsBlack(blackList.includes(pathname));
  }, [pathname]);

  return (
    <ul className={`${styles.headerList} ${inter.className}`}>
      {navLinkItems.map(({ title, linkTo }) => (
        <li
          key={title}
          className={`${styles.headerItem} ${isBlack ? styles.blackStyle : ''}`}
        >
          <Link
            href={linkTo}
            className={`${styles.headerNavLink} ${isBlack ? styles.blackStyle : ''}`}
          >
            {title}
          </Link>

          <div
            className={`${styles.currentPage} ${pathname === linkTo ? styles.active : ''}`}
          ></div>
        </li>
      ))}
    </ul>
  );
};

export default HeaderNavList;

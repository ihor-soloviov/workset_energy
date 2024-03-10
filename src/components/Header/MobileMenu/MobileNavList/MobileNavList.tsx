import Link from 'next/link';
import React from 'react';
import styles from './MobileNavList.module.css';
import { NavLinkItem } from '../../HeaderNavList/HeaderNavList';

type MobileNavListProps = {
  handleMenuClick: () => void;
};

const MobileNavList = ({ handleMenuClick }: MobileNavListProps) => {
  const navLinkItems: NavLinkItem[] = [
    { href: '/pvsystem', text: 'PV-System' },
    { href: '/stormspeicher', text: 'Stormspeicher' },
    { href: '/wallbox', text: 'Wallbox' },
    { href: '/karrier', text: 'Karrier' },
    { href: '/uberuns', text: 'Über uns' },
  ];

  const handleLinkClick = () => handleMenuClick();

  return (
    <ul className={styles.menuTopList}>
      {navLinkItems.map(({ text, href }) => (
        <li key={text} className={styles.menuTopItem}>
          <p className={styles.menuTopItemText}>{text}</p>
          <Link
            onClick={handleLinkClick}
            href={href}
            className={styles.menuNavLink}
          >
            <svg
              className={styles.menuArrowIcon}
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5454 27.3096L26.2121 14.7927"
                stroke=""
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.0154 14.2231L26.2124 14.7921L26.7427 27.8779"
                stroke=""
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileNavList;

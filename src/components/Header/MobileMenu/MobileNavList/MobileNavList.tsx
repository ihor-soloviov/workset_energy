import Link from 'next/link';
import React from 'react';
import styles from './MobileNavList.module.css';
import MenuArrowIcon from '/public/icons/menu-arrow.svg';
import { navLinkItems } from '../../HeaderNavList/HeaderNavList';
type MobileNavListProps = {
  handleMenuClick: () => void;
};

const MobileNavList = ({ handleMenuClick }: MobileNavListProps) => {
  const handleLinkClick = () => handleMenuClick();

  return (
    <ul className={styles.menuNavList}>
      {navLinkItems.map(({ text, href }) => (
        <li key={text} className={styles.menuNavItem}>
          <p className={styles.menuNavItemText}>{text}</p>
          <Link
            onClick={handleLinkClick}
            href={href}
            className={styles.menuNavLink}
          >
            <MenuArrowIcon className={styles.menuArrowIcon} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileNavList;

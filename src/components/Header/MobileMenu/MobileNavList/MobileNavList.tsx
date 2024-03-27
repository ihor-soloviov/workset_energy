import Link from 'next/link';
import React from 'react';
import styles from './MobileNavList.module.css';
import MenuArrowIcon from '/public/icons/menu-arrow.svg';
import { navLinkItems } from '../../HeaderNavList/navlist';

type MobileNavListProps = {
  handleMenuClick: () => void;
};

const MobileNavList: React.FC<MobileNavListProps> = ({ handleMenuClick }) => {
  const handleLinkClick = () => handleMenuClick();

  return (
    <ul className={styles.menuNavList}>
      {navLinkItems.map(({ title, linkTo }) => (
        <li key={title} className={styles.menuNavItem}>
          <Link
            className={styles.menuNavLink}
            onClick={handleLinkClick}
            href={linkTo}
          >
            <p className={styles.menuNavItemText}>{title}</p>

            <MenuArrowIcon className={styles.menuArrowIcon} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileNavList;

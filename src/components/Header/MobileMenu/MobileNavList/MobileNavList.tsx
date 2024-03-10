import Link from 'next/link';
import React from 'react';
import styles from './MobileNavList.module.css';
import { NavLinkItem } from '../../HeaderNavList/HeaderNavList';
import MenuArrowIcon from '/public/icons/menu-arrow.svg';

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

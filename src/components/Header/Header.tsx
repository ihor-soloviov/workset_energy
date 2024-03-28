'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import MobileMenu from './MobileMenu/MobileMenu';
import Button from '../common/Button/Button';
import HeaderNavList from './HeaderNavList/HeaderNavList';
import WorksetIcon from '/public/icons/workset.svg';
import WorksetColorIcon from '/public/icons/workset-color.svg';
import BurgerIcon from '/public/icons/burger.svg';
import ArrowIcon from '/public/icons/small-arrow-btn.svg';
import { useThankYouStore } from '@/store/hero-store';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { toggleStyles, isStylesChanged } = useThankYouStore();
  console.log(isStylesChanged);
  console.log(pathname);

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => isStylesChanged && toggleStyles();
  const handleLogoClick = () =>
    pathname !== '/' && isStylesChanged && toggleStyles();

  useEffect(() => {
    pathname === '/karriere' && toggleStyles();
  }, [pathname, toggleStyles]);

  return (
    <header
      className={`${styles.header} ${isStylesChanged ? styles.blackStyle : ''}`}
    >
      <div className={styles.headerContainer}>
        <nav className={styles.headerNav}>
          <Link
            onClick={handleLogoClick}
            className={styles.headerLogoLink}
            href="/"
          >
            {isStylesChanged ? (
              <WorksetColorIcon className={styles.headerLogo} />
            ) : (
              <WorksetIcon className={styles.headerLogo} />
            )}
          </Link>
          <Button
            handleClick={handleMenuClick}
            className={styles.headerBurgerBtn}
            type="button"
          >
            <BurgerIcon
              className={`${styles.headerBurgerIcon} ${isStylesChanged ? styles.blackStyle : ''}`}
            />
          </Button>
          <HeaderNavList />
        </nav>
        <Link
          onClick={handleLinkClick}
          href="/leadgen"
          className={styles.headerLeadLink}
        >
          Jetzt Berechnen
          <ArrowIcon className={styles.headerIcon} />
        </Link>
      </div>
      {isMenuOpen && <MobileMenu handleMenuClick={handleMenuClick} />}
    </header>
  );
};

export default Header;

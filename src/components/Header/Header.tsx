'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './Header.module.css';
import MobileMenu from './MobileMenu/MobileMenu';
import Button from '../common/Button/Button';
import HeaderNavList from './HeaderNavList/HeaderNavList';
import WorksetIcon from '/public/icons/workset.svg';
import WorksetColorIcon from '/public/icons/workset-color.svg';
import BurgerIcon from '/public/icons/burger.svg';
import ArrowIcon from '/public/icons/small-arrow-btn.svg';
import { useThankYouStore } from '@/store/hero-store';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isStylesChanged } = useThankYouStore();

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`${styles.header} ${isStylesChanged ? styles.blackStyle : ''}`}
    >
      <div className={styles.headerContainer}>
        <nav className={styles.headerNav}>
          <Link className={styles.headerLogoLink} href="/">
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
        <Link href="/leadgen" className={styles.headerLeadLink}>
          Jetzt Berechnen
          <ArrowIcon className={styles.headerIcon} />
        </Link>
      </div>
      {isMenuOpen && <MobileMenu handleMenuClick={handleMenuClick} />}
    </header>
  );
};

export default Header;

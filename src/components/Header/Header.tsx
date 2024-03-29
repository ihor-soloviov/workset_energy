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
import { log } from 'console';

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [currentPathname, setCurrentPathname] = useState('');

  const { isThankYouOpen, setStylesChangedToFalse, setStylesChangedToTrue } =
    useThankYouStore();
  console.log(isThankYouOpen);
  console.log(currentPathname);
  console.log(pathname);

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => {
    isThankYouOpen && setStylesChangedToFalse();
    setCurrentPathname(pathname);
  };
  const handleLogoClick = () => {
    isThankYouOpen && setStylesChangedToFalse();
    setCurrentPathname(pathname);
  };
  useEffect(() => {
    setCurrentPathname(pathname);
  }, []);

  useEffect(() => {
    pathname !== currentPathname && setStylesChangedToFalse();
  }, [pathname, isDesktop, currentPathname, setStylesChangedToFalse]);

  useEffect(() => {
    pathname === '/karriere' && setStylesChangedToTrue();
  }, [pathname, setStylesChangedToTrue]);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 1728);

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1728);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${(isDesktop && isThankYouOpen) || pathname === '/karriere' ? styles.blackStyle : ''}`}
    >
      <div className={styles.headerContainer}>
        <nav className={styles.headerNav}>
          <Link
            onClick={handleLogoClick}
            className={styles.headerLogoLink}
            href="/"
          >
            {(isDesktop && isThankYouOpen) || pathname === '/karriere' ? (
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
              className={`${styles.headerBurgerIcon} ${(isDesktop && isThankYouOpen) || pathname === '/karriere' ? styles.blackStyle : ''}`}
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

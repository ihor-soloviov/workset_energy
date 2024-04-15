/* eslint-disable react-hooks/exhaustive-deps */
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
import { useGlobalStore } from '@/store/global-store';
import { pathnames, jobPathRegex } from '@/utils/pathnames';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [currentPathname, setCurrentPathname] = useState('');

  const { setIsDesktop } = useGlobalStore();

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1440);

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1440);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsDesktop]);

  const { isThankYouOpen, isModalOpen, removeStyles, addStyles } =
    useThankYouStore();

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);

  const handleLogoClick = () => {
    isThankYouOpen && removeStyles();
  };

  useEffect(() => {
    setCurrentPathname(pathname);
    pathname === '/karriere' && addStyles();
    pathname !== currentPathname && removeStyles();
  }, [pathname, currentPathname]);

  return (
    <>
      {(pathnames.includes(pathname) || jobPathRegex.test(pathname)) && (
        <header
          id="header"
          className={`${styles.header} ${isThankYouOpen ? styles.blackStyle : ''}`}
        >
          <div className={styles.headerContainer}>
            <nav className={styles.headerNav}>
              <Link
                onClick={handleLogoClick}
                className={styles.headerLogoLink}
                href="/"
              >
                {isThankYouOpen ? (
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
                  className={`${styles.headerBurgerIcon} ${isThankYouOpen ? styles.blackStyle : ''}`}
                />
              </Button>
              <HeaderNavList />
            </nav>
            <Link
              href="/leadgen"
              className={`${styles.headerLeadLink} ${pathname === '/karriere/jobs' ? styles.jobs : ''}`}
            >
              Jetzt Berechnen
              <ArrowIcon className={styles.headerIcon} />
            </Link>
          </div>

          {isMenuOpen && <MobileMenu handleMenuClick={handleMenuClick} />}
        </header>
      )}
    </>
  );
};

export default Header;

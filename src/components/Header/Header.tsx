/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import MobileMenu from './MobileMenu/MobileMenu';
import Button from '../common/Button/Button';
import HeaderNavList from './HeaderNavList/HeaderNavList';
import WorksetColorIcon from '/public/icons/workset-color.svg';
import WorksetIcon from '/public/icons/workset.svg';
import BurgerIcon from '/public/icons/burger.svg';
import ArrowIcon from '/public/icons/small-arrow-btn.svg';
import { usePathname } from 'next/navigation';
import { useGlobalStore } from '@/store/global-store';
import { pathnames, jobPathRegex, blackList } from '@/utils/pathnames';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBlack, setIsBlack] = useState(false);
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (window) {
      setPosition(window.scrollY);
      setVisible(true);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;
      if (moving > 84) {
        setVisible(position > moving);
        setPosition(moving);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const { setIsDesktop } = useGlobalStore();

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);

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

  useEffect(() => {
    setIsBlack(blackList.includes(pathname));
  }, [pathname]);

  return (
    <>
      {(pathnames.includes(pathname) || jobPathRegex.test(pathname)) && (
        <header
          id="header"
          className={`
          ${styles.header} 
          ${isBlack ? styles.blackStyle : ''} 
          ${!visible ? styles.scrolled : ''}`}
        >
          <div className={styles.headerContainer}>
            <nav className={styles.headerNav}>
              <Link className={styles.headerLogoLink} href="/">
                {isBlack ? (
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
                  className={`${styles.headerBurgerIcon} ${isBlack ? styles.blackStyle : ''}`}
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

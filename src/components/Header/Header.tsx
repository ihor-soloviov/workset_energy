/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import MobileMenu from './MobileMenu/MobileMenu';
import Button from '../common/Button/Button';
import HeaderNavList from './HeaderNavList/HeaderNavList';
import WorksetColorIcon from '/public/icons/workset-color.svg';
import WorksetIcon from '/public/icons/workset.svg';
import BurgerIcon from '/public/icons/burger.svg';
import { usePathname } from 'next/navigation';
import { useGlobalStore } from '@/store/global-store';
import { pathnames, jobPathRegex, blackList } from '@/utils/pathnames';
import Arrow from '../common/Arrow/Arrow';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBlack, setIsBlack] = useState(false);
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();
  const { setIsDesktop } = useGlobalStore();

  const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID
    ? process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID
    : '';

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);

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

  useEffect(() => {
    import('react-facebook-pixel')
      .then(x => x.default)
      .then(ReactPixel => {
        ReactPixel.init(pixelId);
        ReactPixel.pageView();

        Router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView();
        });
      });
  });

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
              href="/leadgen#leadgen"
              className={`${styles.headerLeadLink} ${pathname === '/karriere/jobs' ? styles.jobs : ''}`}
            >
              Jetzt berechnen
              <Arrow className={styles.headerIcon} />
            </Link>
          </div>

          {isMenuOpen && <MobileMenu handleMenuClick={handleMenuClick} />}
        </header>
      )}
    </>
  );
};

export default Header;

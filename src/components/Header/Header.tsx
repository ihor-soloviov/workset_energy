'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './Header.module.css';
import Icon from '../common/Icon/Icon';
import MobileMenu from './MobileMenu/MobileMenu';
import Button from '../common/Button/Button';
import { inter } from '@/utils/fonts';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <nav className={styles.headerNav}>
          <Link className={styles.headerLogoLink} href="/">
            <Icon
              width={73}
              height={43}
              name="workset"
              className={styles.headerLogo}
            />
          </Link>
          <Button
            handleClick={handleMenuClick}
            className={styles.headerBurgerBtn}
            type="button"
          >
            <Icon
              width={44}
              height={44}
              name="burger-two-lines"
              className={styles.headerBurgerIcon}
            />
            <Icon
              width={44}
              height={44}
              name="burger-two-lines-gray"
              className={styles.headerBurgerIconGray}
            />
          </Button>
          <ul className={`${styles.headerList} ${inter.className}`}>
            <li className={styles.headerItem}>
              <Link className={styles.headerNavLink} href="/pvsystem">
                PV-System
              </Link>
            </li>
            <li className={styles.headerItem}>
              <Link className={styles.headerNavLink} href="/stormspeicher">
                Stormspeicher
              </Link>
            </li>
            <li className={styles.headerItem}>
              <Link className={styles.headerNavLink} href="/wallbox">
                Wallbox
              </Link>
            </li>
            <li className={styles.headerItem}>
              <Link className={styles.headerNavLink} href="/karrier">
                Karrier
              </Link>
            </li>
            <li className={styles.headerItem}>
              <Link className={styles.headerNavLink} href="/uberuns">
                Über uns
              </Link>
            </li>
          </ul>
        </nav>
        <Button text="Zum Angebot" type="button" className={styles.headerBtn} />
      </div>
      {isMenuOpen && <MobileMenu handleMenuClick={handleMenuClick} />}
    </header>
  );
};

export default Header;

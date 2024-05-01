'use client';
import styles from './MobileMenu.module.css';
import Container from '../../common/Container/Container';
import MobileNavList from './MobileNavList/MobileNavList';
import Button from '../../common/Button/Button';
import MobileContactList from './MobileContactList/MobileContactList';
import MobileSocialList from './MobileSocialList/MobileSocialList';
import MenuBtnIcon from '/public/icons/small-arrow-btn.svg';
import MenuCrossIcon from '/public/icons/cross.svg';
import Link from 'next/link';
import { useEffect } from 'react';

type MobileMenuProps = {
  handleMenuClick: () => void;
};

const MobileMenu = ({ handleMenuClick }: MobileMenuProps) => {
  const handleLinkClick = () => handleMenuClick();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  return (
    <div className={styles.menu}>
      <div className={styles.menuTopWrap}>
        <Button
          handleClick={handleMenuClick}
          className={styles.menuCrossBtn}
          type="button"
        >
          <MenuCrossIcon className={styles.menuCrossIcon} />
        </Button>
      </div>

      <Container>
        <nav className={styles.menuNav}>
          <MobileNavList handleMenuClick={handleMenuClick} />
        </nav>
        <Link
          onClick={handleLinkClick}
          href="/leadgen"
          className={styles.menuBtn}
        >
          Jetzt Berechnen
          <MenuBtnIcon className={styles.menuBtnIcon} />
        </Link>
        <MobileContactList />
        <MobileSocialList />
      </Container>
    </div>
  );
};

export default MobileMenu;

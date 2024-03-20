'use client';

import React from 'react';
import styles from './Footer.module.css';
import { inter } from '@/utils/fonts';
import ArrowIcon from '/public/icons/footer-arrow.svg';
import Button from '../common/Button/Button';
import FooterSocialList from './FooterSocialList/FooterSocialList';
import FooterMainList from './FooterMainList/FooterMainList';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <FooterMainList />
        <Button
          type="button"
          handleClick={scrollToTop}
          className={styles.footerUpBtn}
        >
          <ArrowIcon className={styles.UpBtnIcon} />
        </Button>
        <p className={`${styles.companyText} ${inter.className}`}>
          © 2024 WorkSET Energy GmbH
        </p>
        <FooterSocialList />
        <p className={`${styles.footerBottomText} ${inter.className}`}>
          Folge uns in den sozialen Medien!
        </p>
      </div>
    </footer>
  );
};

export default Footer;

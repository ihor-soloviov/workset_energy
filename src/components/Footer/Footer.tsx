'use client';

import React from 'react';
import styles from './Footer.module.css';
import { inter } from '@/utils/fonts';
import ArrowIcon from '/public/icons/footer-arrow.svg';
import Button from '../common/Button/Button';
import FooterSocialList from './FooterSocialList/FooterSocialList';
import FooterMainList from './FooterMainList/FooterMainList';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { pathnames, jobPathRegex } from '@/utils/pathnames';

const exclusionList = ['/leadgen', '/thank-you'];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const pathname = usePathname();

  return (
    <>
      {!exclusionList.includes(pathname) &&
        (pathnames.includes(pathname) || jobPathRegex.test(pathname)) && (
          <footer className={styles.footer}>
            <div className={styles.footerContainer}>
              <FooterMainList />

              <div className={styles.footerCookieWrap}>
                <Link href="" className={styles.cookieLink}>
                  Cookie-Einstellungen
                </Link>
                <Link href="/impressum" className={styles.impressumLink}>
                  Impressum
                </Link>
              </div>
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
        )}
    </>
  );
};

export default Footer;

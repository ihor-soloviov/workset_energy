'use client';

import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import { inter } from '@/utils/fonts';
import InstIcon from '/public/icons/instagram.svg';
import FacebookIcon from '/public/icons/facebook.svg';
import YoutubeIcon from '/public/icons/youtube.svg';
import TikTokIcon from '/public/icons/tiktok.svg';
import ArrowIcon from '/public/icons/footer-arrow.svg';
import Button from '../common/Button/Button';
const Footer = () => {
  type NavLink = { text: string; href: string };
  type NavLinkItem = {
    href: string;
    text: string;
    links: Array<NavLink>;
  };

  const navLinkItems: NavLinkItem[] = [
    {
      href: '',
      text: 'PV-System',
      links: [
        { text: 'PV-Anlage Vorteile', href: '' },
        { text: 'Verfügbare Tarifpläne', href: '' },
        { text: 'Unsere Mitarbeiter', href: '' },
        { text: 'Feedback', href: '' },
        { text: 'Unsere Team', href: '' },
        { text: 'Kontakt', href: '' },
      ],
    },
    {
      href: '',
      text: 'Stormspeicher',
      links: [
        { text: 'Stromspeicher Vorteile', href: '' },
        { text: 'Verfügbare Tarifpläne', href: '' },
        { text: 'Unsere Mitarbeiter', href: '' },
        { text: 'Feedback', href: '' },
        { text: 'Unsere Team', href: '' },
        { text: 'Kontakt', href: '' },
      ],
    },
    {
      href: '',
      text: 'Wallbox',
      links: [
        { text: 'Wallbox Vorteile', href: '' },
        { text: 'Verfügbare Tarifpläne', href: '' },
        { text: 'Unsere Mitarbeiter', href: '' },
        { text: 'Feedback', href: '' },
        { text: 'Unsere Team', href: '' },
        { text: 'Kontakt', href: '' },
      ],
    },
    {
      href: '',
      text: 'Company',
      links: [
        { text: 'Über uns', href: '' },
        { text: 'Karrier', href: '' },
        { text: 'Contact', href: '' },
      ],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <ul className={styles.footerMainList}>
          {navLinkItems.map(({ text, links, href }) => (
            <li className={styles.footerMainItem} key={text}>
              <Link href={href} className={styles.footerMainLink}>
                {text}
              </Link>
              <ul className={`${styles.footerList} ${inter.className}`}>
                {links.map(({ text, href }) => (
                  <li className={styles.footerItem} key={text}>
                    <Link className={styles.footerLink} href={href}>
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
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
        <ul className={styles.footerSocialList}>
          <li className={styles.footerSocialItem}>
            <a className={`${styles.footerSocialLink} ${styles.facebook}`}>
              <InstIcon
                className={`${styles.footerSocialIcon} ${styles.instagram}`}
              />
            </a>
          </li>
          <li className={styles.footerSocialItem}>
            <a className={`${styles.footerSocialLink} ${styles.facebook}`}>
              <FacebookIcon
                className={`${styles.footerSocialIcon} ${styles.facebook}`}
              />
            </a>
          </li>
          <li className={styles.footerSocialItem}>
            <a className={styles.footerSocialLink}>
              <YoutubeIcon className={styles.footerSocialIcon} />
            </a>
          </li>
          <li className={styles.footerSocialItem}>
            <a className={styles.footerSocialLink}>
              <TikTokIcon className={styles.footerSocialIcon} />
            </a>
          </li>
        </ul>
        <p className={`${styles.footerBottomText} ${inter.className}`}>
          Folge uns in den sozialen Medien!
        </p>
      </div>
    </footer>
  );
};

export default Footer;

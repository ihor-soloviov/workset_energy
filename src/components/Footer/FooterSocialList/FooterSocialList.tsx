import React from 'react';
import styles from './FooterSocialList.module.css';
import InstIcon from '/public/icons/instagram.svg';
import FacebookIcon from '/public/icons/facebook.svg';
import YoutubeIcon from '/public/icons/youtube.svg';
import TikTokIcon from '/public/icons/tiktok.svg';

type SocialLinkItem = {
  href: string;
};

const FooterSocialList = () => {
  const socialLinkItems: SocialLinkItem[] = [
    { href: '' },
    { href: '' },
    { href: '' },
    { href: '' },
  ];

  const currentIcon = (index: number) => {
    switch (index + 1) {
      case 1:
        return (
          <InstIcon
            className={`${styles.footerSocialIcon} ${styles.instagram}`}
          />
        );

      case 2:
        return (
          <FacebookIcon
            className={`${styles.footerSocialIcon} ${styles.facebook}`}
          />
        );

      case 3:
        return <YoutubeIcon className={styles.footerSocialIcon} />;
      case 4:
        return <TikTokIcon className={styles.footerSocialIcon} />;
      default:
        return;
    }
  };

  return (
    <ul className={styles.footerSocialList}>
      {socialLinkItems.map((_, index) => (
        <li key={index} className={styles.footerSocialItem}>
          <a
            className={`${styles.footerSocialLink} ${index + 1 === 1 ? styles.instagram : ''} ${index + 1 === 2 ? styles.facebook : ''}`}
          >
            {currentIcon(index)}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterSocialList;

import React from 'react';
import styles from './FooterSocialList.module.css';
import InstIcon from '/public/icons/instagram.svg';
import FacebookIcon from '/public/icons/facebook.svg';
import YoutubeIcon from '/public/icons/youtube.svg';
import TikTokIcon from '/public/icons/tiktok.svg';

type SocialLinkItem = {
  href: string;
  icon: React.ElementType;
};

const FooterSocialList = () => {
  const socialLinkItems: SocialLinkItem[] = [
    { href: 'https://www.instagram.com/workset.energy/', icon: InstIcon },
    {
      href: 'https://www.facebook.com/profile.php?id=100090207079736',
      icon: FacebookIcon,
    },
    { href: 'https://www.youtube.com/@WorkSETEnergy', icon: YoutubeIcon },
    {
      href: 'https://www.tiktok.com/@caplicon/video/6959087922247191810',
      icon: TikTokIcon,
    },
  ];

  const getClassByIndex = (index: number) => {
    switch (index + 1) {
      case 1:
        return styles.instagram;
      case 2:
        return styles.facebook;
      default:
        return '';
    }
  };

  return (
    <ul className={styles.footerSocialList}>
      {socialLinkItems.map(({ href, icon }, index) => (
        <li key={index} className={styles.footerSocialItem}>
          <a
            target="_blank"
            href={href}
            className={`${styles.footerSocialLink} ${getClassByIndex(index)}`}
          >
            {React.createElement(
              icon,
              {
                className: `${styles.footerSocialIcon} ${getClassByIndex(index)}`,
              },
              null,
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterSocialList;

import React from 'react';
import styles from './MobileSocialList.module.css';
import MenuInstIcon from '/public/icons/instagram.svg';
import MenuFacebookIcon from '/public/icons/facebook.svg';
import MenuYoutubeIcon from '/public/icons/youtube.svg';

type SocialLinkItem = {
  href: string;
};

const MobileSocialList = () => {
  const socialLinkItems: SocialLinkItem[] = [
    { href: '' },
    { href: '' },
    { href: '' },
  ];

  const currentIcon = (index: number) => {
    switch (index + 1) {
      case 1:
        return <MenuInstIcon className={styles.menuSocialIcon} />;
      case 2:
        return <MenuFacebookIcon className={styles.menuSocialIcon} />;
      case 3:
        return <MenuYoutubeIcon className={styles.menuSocialIcon} />;
      default:
        return;
    }
  };

  return (
    <ul className={styles.socialList}>
      {socialLinkItems.map(({ href }, index) => (
        <li key={index} className={styles.socialItem}>
          <a href={href} className={styles.socialLink}>
            {currentIcon(index)}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MobileSocialList;

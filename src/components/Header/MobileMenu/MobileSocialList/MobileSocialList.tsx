import React from 'react';
import styles from './MobileSocialList.module.css';
import MenuInstIcon from '/public/icons/instagram.svg';
import MenuFacebookIcon from '/public/icons/facebook.svg';
import MenuYoutubeIcon from '/public/icons/youtube.svg';

type SocialLinkItem = {
  href: string;
  icon: React.ElementType;
};

const MobileSocialList = () => {
  const socialLinkItems: SocialLinkItem[] = [
    { href: 'https://www.instagram.com/workset.energy/', icon: MenuInstIcon },
    {
      href: 'https://www.facebook.com/profile.php?id=100090207079736',
      icon: MenuFacebookIcon,
    },
    { href: 'https://www.youtube.com/@WorkSETEnergy', icon: MenuYoutubeIcon },
  ];

  return (
    <ul className={styles.socialList}>
      {socialLinkItems.map(({ href, icon }, index) => (
        <li key={index} className={styles.socialItem}>
          <a target="_blank" href={href} className={styles.socialLink}>
            {React.createElement(
              icon,
              { className: styles.menuSocialIcon },
              null,
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MobileSocialList;

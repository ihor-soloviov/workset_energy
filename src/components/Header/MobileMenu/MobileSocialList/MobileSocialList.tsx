import React from 'react';
import styles from './MobileSocialList.module.css';
import MenuInstIcon from '/public/icons/instagram.svg';
import MenuFacebookIcon from '/public/icons/facebook.svg';
import MenuYoutubeIcon from '/public/icons/youtube.svg';
const MobileSocialList = () => {
  return (
    <ul className={styles.socialList}>
      <li className={styles.socialItem}>
        <a className={styles.socialLink}>
          <MenuInstIcon className={styles.menuSocialIcon} />
        </a>
      </li>
      <li className={styles.socialItem}>
        <a className={styles.socialLink}>
          <MenuFacebookIcon className={styles.menuSocialIcon} />
        </a>
      </li>
      <li className={styles.socialItem}>
        <a className={styles.socialLink}>
          <MenuYoutubeIcon className={styles.menuSocialIcon} />
        </a>
      </li>
    </ul>
  );
};

export default MobileSocialList;

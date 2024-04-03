import React from 'react';
import styles from './MobileSocialList.module.css';
import { socialLinkItems } from './mobileSocialItems';

const MobileSocialList = () => {
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

import React from 'react';
import styles from './MobileSocialList.module.css';
import { socialLinkItems } from './mobileSocialItems';

const MobileSocialList = () => {
  return (
    <ul className={styles.socialList}>
      {socialLinkItems.map(({ href, icon, ariaLabel }, index) => (
        <li key={index} className={styles.socialItem}>
          <a
            aria-label={ariaLabel}
            target="_blank"
            href={href}
            className={styles.socialLink}
          >
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

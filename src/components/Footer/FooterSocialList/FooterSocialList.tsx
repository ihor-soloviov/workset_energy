import React from 'react';
import styles from './FooterSocialList.module.css';
import { socialLinkItems } from './footerSocialItems';
const FooterSocialList = () => {
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

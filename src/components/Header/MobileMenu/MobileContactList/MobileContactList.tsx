import React from 'react';
import styles from './MobileContactList.module.css';
import { inter } from '@/utils/fonts';

type ContactLinkItem = {
  href?: string;
  text: string;
  title: string;
};

const MobileContactList = () => {
  const contactLinkItems: ContactLinkItem[] = [
    { text: 'Magirus-Deutz-Str, 1289077 Ulm', title: 'Address' },
    {
      href: 'mailto:office@work-set.eu',
      text: 'office@work-set.eu',
      title: 'E-mail',
    },
    {
      href: 'tel:+4973114613210',
      text: '+49-73-114-613-210',
      title: 'Telefonnummer',
    },
  ];

  return (
    <ul className={`${styles.menuList} ${inter.className}`}>
      {contactLinkItems.map(({ text, title, href }) => (
        <li key={title} className={styles.menuItem}>
          <h3 className={styles.menuItemTitle}>{title}</h3>
          {title === 'Address' ? (
            <p className={styles.menuLink}>{text}</p>
          ) : (
            <a href={href} className={styles.menuLink}>
              {text}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MobileContactList;

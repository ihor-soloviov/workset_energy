import Link from 'next/link';
import React from 'react';
import styles from './FooterMainList.module.css';
import { inter } from '@/utils/fonts';

type NavLink = { text: string; href: string };
type NavLinkItem = {
  href: string;
  text: string;
  links: Array<NavLink>;
};

const FooterMainList = () => {
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
  return (
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
  );
};

export default FooterMainList;

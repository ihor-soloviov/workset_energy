'use client';

import React from 'react';
import styles from './AmenitiesList.module.css';
import { inter } from '@/utils/fonts';
import { amenitiesItems } from './amenitiesItems';
import BtnArrowIcon from '/public/icons/small-product-arrow.svg';
import Link from 'next/link';

const AmenitiesList = () => {
  return (
    <ul className={styles.amenitiesList}>
      {amenitiesItems.map(({ text, title, link, icon }) => (
        <li className={styles.amenitiesItem} key={title}>
          <div className={styles.amenitiesIconWrap}>
            {React.createElement(
              icon,
              {
                className: styles.amenitiesIcon,
              },
              null,
            )}
          </div>
          <h3 className={styles.amenitiesTitle}>{title}</h3>
          <p className={`${styles.amenitiesText} ${inter.className}`}>{text}</p>
          <Link href="/uber-uns" className={styles.amenitiesLink} type="button">
            Mehr Info
            <BtnArrowIcon className={styles.amenitiesLinkIcon} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AmenitiesList;

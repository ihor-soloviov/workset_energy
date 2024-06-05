'use client';
import React from 'react';

import styles from './AdvantagesList.module.css';
import { inter } from '@/utils/fonts';
import { advantagesItems } from './advantagesItems';
import BtnArrowIcon from '/public/icons/small-product-arrow.svg';
import Link from 'next/link';
import Arrow from '@/components/common/Arrow/Arrow';

const AdvantagesList = () => (
  <ul className={`${styles.advantagesList} ${inter.className}`}>
    {advantagesItems.map(({ text, title, icon }) => (
      <li className={styles.advantagesItem} key={title}>
        <div className={styles.advantagesIconWrap}>
          {React.createElement(
            icon,
            {
              className: styles.advantagesIcon,
            },
            null,
          )}
        </div>
        <h3 className={styles.advantagesTitle}>{title}</h3>
        <p className={styles.advantagesText}>{text}</p>
        <Link href="/uber-uns" className={styles.advantagesLink} type="button">
          Mehr Info
          <Arrow className={styles.advantagesLinkIcon} />
        </Link>
      </li>
    ))}
  </ul>
);

export default AdvantagesList;

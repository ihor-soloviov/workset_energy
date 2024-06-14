'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Counter = dynamic(() => import('./Counter/Counter'), {
  ssr: false,
});

import { amenitiesItems } from './amenitiesItems';
import CheckIcon from '/public/icons/check.svg';
import styles from './AmenitiesList.module.css';

const AmenitiesList = () => {
  return (
    <ul className={styles.amenitiesList}>
      {amenitiesItems.map(({ title, textList, subTitle }) => (
        <li className={styles.amenitiesItem} key={title}>
          <h3 className={styles.amenitiesTitle}>
            {subTitle && (
              <Counter target={10000} duration={2} title={subTitle} />
            )}
            {title}
          </h3>
          <ul className={styles.amenitiesTextList}>
            {textList.map((text, index) => (
              <li className={styles.amenitiesTextItem} key={index}>
                <CheckIcon className={styles.amenitiesIcon} />
                <p className={styles.amenitiesText}>{text}</p>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default AmenitiesList;

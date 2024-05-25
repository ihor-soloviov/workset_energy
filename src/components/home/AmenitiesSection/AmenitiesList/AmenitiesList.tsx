import React, { useState } from 'react';
import styles from './AmenitiesList.module.css';
import { inter } from '@/utils/fonts';
import { amenitiesItems } from './amenitiesItems';
import BtnArrowIcon from '/public/icons/small-product-arrow.svg';

import Button from '@/components/common/Button/Button';

const AmenitiesList = () => {
  const [visibleItems, setVisibleItems] = useState<Record<string, boolean>>({});

  const toggleVisibility = (title: string) => {
    setVisibleItems(prevState => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  return (
    <ul className={styles.amenitiesList}>
      {amenitiesItems.map(({ mainTitle, title, mainText, extraText }) => (
        <li
          className={`${styles.amenitiesItem} ${visibleItems[title] ? styles.active : ''}`}
          key={title}
          onClick={() => toggleVisibility(title)}
        >
          <div className={styles.amenitiesMainWrap}>
            <h3 className={styles.amenitiesMainTitle}>{mainTitle}</h3>
            <h4 className={`${styles.amenitiesTitle} ${inter.className}`}>
              {title}
            </h4>

            <div className={`${styles.amenitiesTextWrap} ${inter.className}`}>
              <p className={styles.amenitiesText}>{mainText}</p>

              <p
                className={`${styles.amenitiesExtraText} ${visibleItems[title] ? styles.active : ''}`}
              >
                {extraText}
              </p>
            </div>
          </div>
          <Button
            handleClick={e => {
              e.stopPropagation();
              toggleVisibility(title);
            }}
            type="button"
            className={styles.amenitiesBtn}
          >
            <BtnArrowIcon
              className={`${styles.amenitiesIcon} ${visibleItems[title] ? styles.active : ''}`}
            />
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default AmenitiesList;

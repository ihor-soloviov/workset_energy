import React from 'react';
import Button from '@/components/common/Button/Button';
import styles from './AdvantagesList.module.css';
import { inter } from '@/utils/fonts';
import { advantagesItems } from './advantagesItems';
import BtnArrowIcon from '/public/icons/small-product-arrow.svg';

const AdvantagesList = () => {
  return (
    <ul className={`${styles.advantagesList} ${inter.className}`}>
      {advantagesItems.map(({ text, title, link, icon }) => (
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
          <Button className={styles.advantagesBtn} type="button">
            Mehr Info
            <BtnArrowIcon className={styles.advantagesBtnIcon} />
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default AdvantagesList;

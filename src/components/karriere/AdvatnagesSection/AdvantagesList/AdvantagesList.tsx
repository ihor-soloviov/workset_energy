'use client';
import React from 'react';
import Button from '@/components/common/Button/Button';
import styles from './AdvantagesList.module.css';
import { inter } from '@/utils/fonts';
import { advantagesItems } from './advantagesItems';
import BtnArrowIcon from '/public/icons/small-product-arrow.svg';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { fromBotAnimation } from '@/utils/animations';

const AdvantagesList = () => {
  return (
    <LazyMotion features={domAnimation}>
      <ul className={`${styles.advantagesList} ${inter.className}`}>
        {advantagesItems.map(({ text, title, link, icon }, index) => (
          <m.li
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0, once: true }}
            variants={fromBotAnimation}
            className={styles.advantagesItem}
            key={title}
          >
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
          </m.li>
        ))}
      </ul>
    </LazyMotion>
  );
};

export default AdvantagesList;

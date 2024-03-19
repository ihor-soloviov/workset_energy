'use client';

import React, { useState } from 'react';
import styles from './VisionSlider.module.css';
import { inter } from '@/utils/fonts';
import cn from 'classnames';

const VisionSlider = () => {
  const [clicked, setClicked] = useState(1);

  const handler = (num = 1) => {
    setClicked(num);
  };

  return (
    <div className={styles.teamImgMainWrap}>
      <div
        onClick={() => handler(1)}
        className={cn(styles.teamImgWrap, styles.first, {
          [styles.active]: clicked === 1,
        })}
      >
        <div className={styles.teamTextWrap}>
          <h3 className={styles.teamImgTitle}>Eric Blumenstein</h3>
          <p className={`${styles.teamImgText} ${inter.className}`}>
            Fachberater
          </p>
        </div>
      </div>
      <div
        onClick={() => handler(2)}
        className={cn(styles.teamImgWrap, styles.second, {
          [styles.active]: clicked === 2,
        })}
      >
        <div className={styles.teamTextWrap}>
          <h3 className={styles.teamImgTitle}>Eric Blumenstein</h3>
          <p className={`${styles.teamImgText} ${inter.className}`}>
            Fachberater
          </p>
        </div>
      </div>
      <div
        onClick={() => handler(3)}
        className={cn(styles.teamImgWrap, styles.third, {
          [styles.active]: clicked === 3,
        })}
      >
        <div className={styles.teamTextWrap}>
          <h3 className={styles.teamImgTitle}>Eric Blumenstein</h3>
          <p className={`${styles.teamImgText} ${inter.className}`}>
            Fachberater
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionSlider;

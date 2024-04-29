'use client';
import React from 'react';
import styles from '../TeamSection.module.css';
import { inter } from '@/utils/fonts';
import useObserver from '@/hooks/useObserver';

type Props = {
  handleImage: (value: string) => void;
};

const TeamTextWrap: React.FC<Props> = ({ handleImage }) => {
  useObserver(`.${styles.teamTextWrap}`, `${styles.teamTextWrapVisible}`);

  return (
    <div className={styles.teamTextWrap}>
      <h2 className={styles.teamTitle}>
        Unser Team
        <br className={styles.teamBr} /> von Experten
      </h2>
      <p className={`${styles.teamText} ${inter.className}`}>
        Werde Teil unseres Teams! Hinterlasse uns deine Daten und wir
        kontaktieren dich
      </p>
      <div>
        <div className={styles.carouselBtns}>
          <button
            onClick={() => handleImage('prev')}
            className={styles.carouselBtn}
          >
            left
          </button>
          <button
            onClick={() => handleImage('next')}
            className={styles.carouselBtn}
          >
            right
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamTextWrap;

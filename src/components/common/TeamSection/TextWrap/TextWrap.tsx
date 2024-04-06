'use client';
import React from 'react';
import styles from '../TeamSection.module.css';
import { inter } from '@/utils/fonts';
import Button from '../../Button/Button';
import ArrowIcon from '/public/icons/small-arrow-btn.svg';

const TextWrap = () => {
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
        <Button className={styles.teamBtn} type="button">
          Zum Angebot
          <ArrowIcon className={styles.teamIcon} />
        </Button>
      </div>
    </div>
  );
};

export default TextWrap;

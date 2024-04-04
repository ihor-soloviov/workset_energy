'use client';
import React from 'react';
import styles from '../VideoSection.module.css';
import { inter } from '@/utils/fonts';

type Props = {
  title: string;
  text: string;
};

const TextWrap: React.FC<Props> = ({ title, text }) => {
  return (
    <div className={styles.videoTextWrap}>
      <h2 className={styles.videoTitle}>{title}</h2>
      <p className={`${styles.videoText} ${inter.className}`}>{text}</p>
    </div>
  );
};

export default TextWrap;

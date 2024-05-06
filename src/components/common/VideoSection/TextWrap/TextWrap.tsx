'use client';
import React from 'react';
import styles from '../VideoSection.module.css';
import { inter } from '@/utils/fonts';
import useObserver from '@/hooks/useObserver';

type Props = {
  title: string;
  text: string;
  className?: string;
};

const TextWrap: React.FC<Props> = ({ title, text, className }) => {
  useObserver(`.${styles.videoTextWrap}`, `${styles.videoTextWrapVisible}`);
  return (
    <div className={styles.videoTextWrap}>
      <h2 className={styles.videoTitle}>{title}</h2>
      <p className={`${styles.videoText} ${inter.className}`}>{text}</p>
    </div>
  );
};

export default TextWrap;

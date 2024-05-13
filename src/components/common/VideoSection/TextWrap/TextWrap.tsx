'use client';
import React from 'react';
import styles from '../VideoSection.module.css';
import { useGlobalStore } from '@/store/global-store';
import useObserver from '@/hooks/useObserver';
import { renderText } from '@/utils/renderText';
import { inter } from '@/utils/fonts';

type Props = {
  title: string;
  titleClassName: string;
  text: string;
  textDesk?: string;
  className?: string;
};

const TextWrap: React.FC<Props> = ({
  title,
  titleClassName,
  text,
  textDesk,
  className,
}) => {
  useObserver(`.${styles.videoTextWrap}`, `${styles.videoTextWrapVisible}`);

  const { isDesktop } = useGlobalStore();

  return (
    <div className={styles.videoTextWrap}>
      <h2
        className={`${styles.videoTitle} ${titleClassName ? styles[titleClassName] : ''}`}
      >
        {title}
      </h2>
      {isDesktop && textDesk ? (
        <p className={`${styles.videoText} ${inter.className}`}>{textDesk}</p>
      ) : (
        renderText(text, styles.videoText, true)
      )}
    </div>
  );
};

export default TextWrap;

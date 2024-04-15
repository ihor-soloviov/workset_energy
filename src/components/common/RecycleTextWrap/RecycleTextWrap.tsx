'use client';

import React, { useEffect } from 'react';
import styles from './RecycleTextWrap.module.css';
import useObserver from '@/hooks/useObserver';

type Props = {
  title: string;
  titleClass: string;
  text?: string;
  textClass?: string;
};

const RecycleTextWrap: React.FC<Props> = ({
  title,
  titleClass,
  text,
  textClass,
}) => {
  useObserver(
    `.${styles.scrollArticleHidden}`,
    `${styles.scrollArticleVisible}`,
  );

  return (
    <article className={`${styles.scrollArticleHidden}`}>
      <h2 className={titleClass}>{title}</h2>
      {text && <p className={textClass}>{text}</p>}
    </article>
  );
};

export default RecycleTextWrap;

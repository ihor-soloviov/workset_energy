'use client';
import React, { useEffect } from 'react';
import styles from './RecycleTextWrap.module.css';
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
  const hiddenElements = document.querySelectorAll(
    `${styles.scrollTitleHidden}`,
  );

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.scrollTitleVisible);
        } else {
          entry.target.classList.remove(styles.scrollTitleVisible);
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      `.${styles.scrollTitleHidden}`,
    );

    hiddenElements.forEach(el => observer.observe(el));

    // Cleanup function
    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <h2 className={`${titleClass} ${styles.scrollTitleHidden}`}>{title}</h2>
      {text && <p className={textClass}>{text}</p>}
    </>
  );
};

export default RecycleTextWrap;

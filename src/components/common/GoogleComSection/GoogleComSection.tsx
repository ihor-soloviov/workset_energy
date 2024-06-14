import React from 'react';
import dynamic from 'next/dynamic';

const GoogleComSlider = dynamic(
  () => import('./GoogleComSlider/GoogleComSlider'),
  {
    ssr: false,
  },
);

const RecycleTextWrap = dynamic(
  () => import('@/components/common/RecycleTextWrap/RecycleTextWrap'),
  {
    ssr: false,
  },
);
import styles from './GoogleComSection.module.css';

const GoogleComSection = () => {
  return (
    <section id="feedback" className={styles.googleComSection}>
      <div className={styles.googleComContainer}>
        <RecycleTextWrap
          title="Unsere Kunden"
          titleClass={styles.googleComTitle}
        />
        <GoogleComSlider />
      </div>
    </section>
  );
};

export default GoogleComSection;

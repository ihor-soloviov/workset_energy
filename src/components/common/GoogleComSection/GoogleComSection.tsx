import React from 'react';
import styles from './GoogleComSection.module.css';
import GoogleComSlider from './GoogleComSlider/GoogleComSlider';
import RecycleTextWrap from '../RecycleTextWrap/RecycleTextWrap';

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

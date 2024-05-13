import React from 'react';
import styles from './GoogleComSection.module.css';
import GoogleComSlider from './GoogleComSlider/GoogleComSlider';
import RecycleTextWrap from '../RecycleTextWrap/RecycleTextWrap';

const GoogleComSection = () => {
  return (
    <section id="feedback" className={styles.googleComSection}>
      <RecycleTextWrap
        title="Unsere Kunden"
        titleClass={styles.googleComTitle}
      />
      <GoogleComSlider />
    </section>
  );
};

export default GoogleComSection;

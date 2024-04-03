import React from 'react';
import styles from './GoogleComSection.module.css';
import GoogleComSlider from './GoogleComSlider/GoogleComSlider';
import RecycleTextWrap from '../RecycleTextWrap/RecycleTextWrap';

const GoogleComSection = () => {
  return (
    <section className={styles.googleComSection}>
      <RecycleTextWrap
        title="Was sagen unsere Kunden über uns?"
        titleClass={styles.googleComTitle}
      />
      <GoogleComSlider />
    </section>
  );
};

export default GoogleComSection;

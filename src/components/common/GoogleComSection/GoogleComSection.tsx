import React from 'react';
import styles from './GoogleComSection.module.css';
import GoogleComSlider from './GoogleComSlider/GoogleComSlider';

const GoogleComSection = () => {
  return (
    <section className={styles.googleComSection}>
      <h2 className={styles.googleComTitle}>
        Was sagen unsere Kunden über uns?
      </h2>
      <GoogleComSlider />
    </section>
  );
};

export default GoogleComSection;

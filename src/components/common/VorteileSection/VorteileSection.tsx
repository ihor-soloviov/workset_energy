import React from 'react';
import styles from './VorteileSection.module.css';
import VorteileSlider from './VorteileSlider/VorteileSlider';

const VorteileSection = () => {
  return (
    <section className={styles.modulesVorteileSection}>
      <VorteileSlider />
    </section>
  );
};

export default VorteileSection;

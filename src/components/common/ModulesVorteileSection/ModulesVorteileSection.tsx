import React from 'react';
import styles from './ModulesVorteileSection.module.css';
import VorteileSlider from './VorteileSlider/VorteileSlider';

const ModulesVorteileSection = () => {
  return (
    <section className={styles.modulesVorteileSection}>
      <VorteileSlider />
    </section>
  );
};

export default ModulesVorteileSection;

import styles from './VisionSection.module.css';
import React from 'react';

import VisionSlider from './VisionSlider/VisionSlider';

const VisionSection = () => {
  return (
    <section className={styles.visionSection}>
      <VisionSlider />
    </section>
  );
};

export default VisionSection;

import React from 'react';
import styles from './VisionSection.module.css';

import VisionSlider from './VisionSlider/VisionSlider';

const VisionSection = () => {
  return (
    <section className={styles.visionSection}>
      <VisionSlider />
    </section>
  );
};

export default VisionSection;
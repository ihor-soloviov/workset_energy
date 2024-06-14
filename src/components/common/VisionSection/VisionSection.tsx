import React from 'react';
import dynamic from 'next/dynamic';

const VisionSlider = dynamic(() => import('./VisionSlider/VisionSlider'), {
  ssr: false,
});

import styles from './VisionSection.module.css';

const VisionSection = () => {
  return (
    <section id="vision" className={styles.visionSection}>
      <VisionSlider />
    </section>
  );
};

export default VisionSection;

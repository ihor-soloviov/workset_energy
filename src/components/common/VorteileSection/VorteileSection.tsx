import React from 'react';
import styles from './VorteileSection.module.css';
import VorteileSlider from './VorteileSlider/VorteileSlider';
import { VorteileSliderT } from '@/types/infoTypes';

type Props = VorteileSliderT & {
  id: string;
};

const VorteileSection: React.FC<Props> = ({ sliderImages, sliderText, id }) => {
  return (
    <section id={id} className={styles.modulesVorteileSection}>
      <VorteileSlider sliderImages={sliderImages} sliderText={sliderText} />
    </section>
  );
};

export default VorteileSection;

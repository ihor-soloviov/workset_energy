import React from 'react';
import styles from './VorteileSection.module.css';
import VorteileSlider from './VorteileSlider/VorteileSlider';
import { VorteileSliderT } from '@/types/infoTypes';

type Props = VorteileSliderT;

const VorteileSection: React.FC<Props> = ({ sliderImages, sliderText }) => {
  return (
    <section className={styles.modulesVorteileSection}>
      <VorteileSlider sliderImages={sliderImages} sliderText={sliderText} />
    </section>
  );
};

export default VorteileSection;

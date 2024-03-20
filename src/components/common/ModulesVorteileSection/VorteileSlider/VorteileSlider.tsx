'use client';
import React, { useState } from 'react';
import { inter, interTight } from '@/utils/fonts';
import styles from './VorteileSlider.module.css';

import Button from '../../Button/Button';
import Image from 'next/image';

import { sliderImages } from './slides';
import { vorteileItems } from './slides';
import ArrowIcon from '/public/icons/slide-arrow.svg';

const VorteileSlider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handlePrevSlide = () =>
    setActiveSlideIndex(prev => (prev === 0 ? 5 : prev - 1));

  const handleNextSlide = () =>
    setActiveSlideIndex(prev => (prev === 5 ? 0 : prev + 1));

  return (
    <div className={styles.vorteileSliderWrap}>
      <React.Fragment>
        <Image
          className={styles.sliderImgMob}
          src={sliderImages[activeSlideIndex].mobile}
          alt="slide"
        />
        <Image
          className={styles.sliderImgDesk}
          src={sliderImages[activeSlideIndex].desktop}
          alt="slide"
        />
      </React.Fragment>
      <div className={styles.sliderInfoWrap}>
        <div className={styles.sliderInfo}>
          <h2 className={`${styles.sliderTitle} ${interTight.className}`}>
            {vorteileItems[activeSlideIndex].title}
          </h2>
          <p className={`${styles.sliderText} ${inter.className}`}>
            {vorteileItems[activeSlideIndex].text}
          </p>
        </div>
        <div className={styles.sliderButtonsWrap}>
          <Button
            handleClick={handlePrevSlide}
            type="button"
            className={styles.sliderBtn}
          >
            <ArrowIcon className={styles.prevArrow} />
          </Button>
          <Button
            handleClick={handleNextSlide}
            type="button"
            className={styles.sliderBtn}
          >
            <ArrowIcon className={styles.nextArrow} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VorteileSlider;

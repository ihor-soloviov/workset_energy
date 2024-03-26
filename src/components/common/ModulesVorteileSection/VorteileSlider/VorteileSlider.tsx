'use client';
import React, { useState } from 'react';
import { inter, interTight } from '@/utils/fonts';
import styles from './VorteileSlider.module.css';

import Button from '../../Button/Button';
import Image from 'next/image';

import ArrowIcon from '/public/icons/slide-arrow.svg';
import SliderDots from '../../SliderDots/SliderDots';
import { VorteileSliderT } from '@/types/infoTypes';

type Props = VorteileSliderT;

const VorteileSlider: React.FC<Props> = ({ sliderImages, sliderText }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handlePrevSlide = () =>
    setActiveSlideIndex(prev => (prev === 0 ? 5 : prev - 1));

  const handleNextSlide = () =>
    setActiveSlideIndex(prev => (prev === 5 ? 0 : prev + 1));

  const handleActiveSlide = (index: number) => setActiveSlideIndex(index);

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
        <p className={`${styles.sliderInfoCounter} ${inter.className}`}>
          0{activeSlideIndex + 1}
        </p>
        <div className={styles.sliderInfo}>
          <h2 className={styles.sliderTitle}>
            {sliderText[activeSlideIndex].title}
          </h2>
          <p className={`${styles.sliderText} ${inter.className}`}>
            {sliderText[activeSlideIndex].text}
          </p>
        </div>
        <div className={styles.sliderControllers}>
          <div className={styles.sliderDotsWrap}>
            <SliderDots
              handleActiveSlide={handleActiveSlide}
              count={6}
              activeSlide={activeSlideIndex}
            />
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
    </div>
  );
};

export default VorteileSlider;

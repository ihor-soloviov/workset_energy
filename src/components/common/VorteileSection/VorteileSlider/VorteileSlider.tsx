'use client';
import React, { useEffect, useState } from 'react';
import { inter } from '@/utils/fonts';
import styles from './VorteileSlider.module.css';

import Button from '../../Button/Button';

import ArrowIcon from '/public/icons/slide-arrow.svg';
import SliderDots from '../../SliderDots/SliderDots';
import { VorteileSliderT } from '@/types/infoTypes';
import { useSliderStore } from '@/store/sliders-store';
import SliderWrap from '../SliderWrap/SliderWrap';

type Props = VorteileSliderT;

const VorteileSlider: React.FC<Props> = ({ sliderImages, sliderText }) => {
  const { currIndex, prevIndex, nextIndex, setIndex, setAnimate, animateTo } =
    useSliderStore();

  const sliderLength = sliderImages.length;

  const handlePrevSlide = () => {
    setAnimate('toPrev');
    setTimeout(() => {
      setIndex(prevIndex, sliderLength);
      setAnimate('');
    }, 450);
  };

  const handleNextSlide = () => {
    setAnimate('toNext');
    setTimeout(() => {
      setIndex(nextIndex, sliderLength);
      setAnimate('');
    }, 450);
  };

  return (
    <div className={styles.vorteileSliderWrap}>
      <SliderWrap sliderImages={sliderImages} />
      <div className={styles.sliderInfoWrap}>
        <div className={styles.sliderInfoContainer}>
          <p className={`${styles.sliderInfoCounter} ${inter.className}`}>
            0{currIndex + 1}
          </p>
          <div className={styles.sliderInfo}>
            <h2 className={styles.sliderTitle}>
              {sliderText[currIndex].title}
            </h2>
            <p className={`${styles.sliderText} ${inter.className}`}>
              {sliderText[currIndex].text}
            </p>
          </div>
          <div className={styles.sliderControllers}>
            <div className={styles.sliderDotsWrap}>
              <SliderDots
                handleActiveSlide={setIndex}
                count={sliderLength}
                activeSlide={currIndex}
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
    </div>
  );
};

export default VorteileSlider;

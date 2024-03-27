'use client';
import React, { useState } from 'react';
import { inter } from '@/utils/fonts';
import styles from './VorteileSlider.module.css';

import Button from '../../Button/Button';

import ArrowIcon from '/public/icons/slide-arrow.svg';
import SliderDots from '../../SliderDots/SliderDots';
import { VorteileSliderT } from '@/types/infoTypes';
import Image from 'next/image';

type Props = VorteileSliderT;

const VorteileSlider: React.FC<Props> = ({ sliderImages, sliderText }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [animateTo, setAnimateTo] = useState('');

  const handlePrevSlide = () => {
    setAnimateTo('left');
    setTimeout(() => {
      setActiveSlideIndex(prev => (prev === 0 ? 5 : prev - 1));
    }, 600);
    setTimeout(() => {
      setAnimateTo('');
    }, 630);
  };

  const handleNextSlide = () => {
    setAnimateTo('right');
    setTimeout(() => {
      setActiveSlideIndex(prev => (prev === 5 ? 0 : prev + 1));
    }, 600);
    setTimeout(() => {
      setAnimateTo('');
    }, 630);
  };

  const handleActiveSlide = (index: number) => setActiveSlideIndex(index);

  return (
    <div className={styles.vorteileSliderWrap}>
      <div className={styles.vorteileImageWrap}>
        <Image
          className={styles.sliderImgMob}
          src={sliderImages[activeSlideIndex].mobile}
          layout="fill"
          objectFit="cover"
          alt="slide"
        />
        <Image
          className={`${styles.sliderImgDesk} ${styles[animateTo]}`}
          src={sliderImages[activeSlideIndex].desktop}
          layout="fill"
          objectFit="cover"
          alt="slide"
        />
      </div>
      <div className={styles.sliderInfoWrap}>
        <div className={styles.sliderInfoContainer}>
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
    </div>
  );
};

export default VorteileSlider;

'use client';
import React, { useEffect, useState } from 'react';
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

  const nextIndex = activeSlideIndex === 5 ? 0 : activeSlideIndex + 1;
  const prevIndex = activeSlideIndex === 0 ? 5 : activeSlideIndex - 1;

  const handlePrevSlide = () => {
    setAnimateTo('toPrev');
    setTimeout(() => {
      setActiveSlideIndex(prev => (prev === 0 ? 5 : prev - 1));
      setAnimateTo('');
    }, 450);
  };

  const handleNextSlide = () => {
    setAnimateTo('toNext');
    setTimeout(() => {
      setActiveSlideIndex(prev => (prev === 5 ? 0 : prev + 1));
      setAnimateTo('');
    }, 450);
  };

  useEffect(() => {
    console.log(animateTo);
  }, [animateTo]);

  const handleActiveSlide = (index: number) => setActiveSlideIndex(index);

  return (
    <div className={styles.vorteileSliderWrap}>
      <div className={styles.vorteileImageWrap}>
        {/* <Image
          className={styles.sliderImgMob}
          src={sliderImages[activeSlideIndex].mobile}
          layout="fill"
          objectFit="cover"
          alt="slide"
        /> */}
        <Image
          className={`${styles.sliderImgDesk} ${styles.prev} ${animateTo === 'toPrev' ? styles[animateTo] : ''}`}
          src={sliderImages[prevIndex].desktop}
          layout="fill"
          objectFit="cover"
          alt="slide"
        />
        <Image
          className={styles.sliderImgDesk}
          src={sliderImages[activeSlideIndex].desktop}
          layout="fill"
          objectFit="cover"
          alt="slide"
        />
        <Image
          className={`${styles.sliderImgDesk} ${styles.next} ${animateTo === 'toNext' ? styles[animateTo] : ''}`}
          src={sliderImages[nextIndex].desktop}
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

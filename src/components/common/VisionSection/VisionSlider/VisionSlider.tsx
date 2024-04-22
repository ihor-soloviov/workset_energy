'use client';

import React, { useEffect, useState } from 'react';
import styles from './VisionSlider.module.css';
import { inter } from '@/utils/fonts';
import Button from '../../Button/Button';
import ArrowIcon from '/public/icons/slide-arrow.svg';
import Image from 'next/image';
import { visionImages, visionItems } from './slides';
import SliderDots from '../../SliderDots/SliderDots';

const VisionSlider = () => {
  const [slide, setSlide] = useState(1);

  const handlePrevClick = () => setSlide(prev => (prev === 1 ? 3 : prev - 1));

  const handleNextClick = () => setSlide(prev => (prev === 3 ? 1 : prev + 1));

  const addVisibleClass = (slide: number, expectedSlides: number[]) =>
    expectedSlides.includes(slide) ? styles.visible : '';

  const handleActiveSlide = (index: number) => setSlide(index + 1);

  return (
    <div className={styles.visionMainWrap}>
      <div className={styles.visionImgWrap}>
        <div className={styles.visionImgContainer}>
          {visionImages.map(
            ({ mobile, desktop, className, rangeSlides }, index) => (
              <React.Fragment key={index}>
                <Image
                  loading="lazy"
                  className={`${styles.visionImgMob} ${styles[className]} ${addVisibleClass(slide, rangeSlides)}`}
                  src={mobile}
                  alt="img"
                />
                <Image
                  loading="lazy"
                  className={`${styles.visionImgDesc} ${styles[className]} ${addVisibleClass(slide, rangeSlides)}`}
                  alt="img"
                  src={desktop}
                />
              </React.Fragment>
            ),
          )}
        </div>
      </div>
      <div className={styles.visionBtnWrap}>
        <Button
          handleClick={handlePrevClick}
          type="button"
          className={styles.visionBtn}
        >
          <ArrowIcon className={styles.prevArrow} />
        </Button>
        <Button
          handleClick={handleNextClick}
          type="button"
          className={styles.visionBtn}
        >
          <ArrowIcon className={styles.nextArrow} />
        </Button>
      </div>
      <div className={styles.visionTextWrap}>
        <p className={styles.visionCount}>
          0<span className={styles.visionCountSpan}>{slide}</span>
        </p>
        {visionItems.map(({ text, title }, index) => (
          <div
            key={title}
            className={`${styles.visionTextContainer} ${slide === index + 1 ? styles.active : ''}`}
          >
            <h2 className={styles.visionTitle}>{title}</h2>
            <p className={`${styles.visionText} ${inter.className}`}>{text}</p>
          </div>
        ))}
        <div className={styles.visionDotsWrap}>
          <SliderDots
            handleActiveSlide={handleActiveSlide}
            count={3}
            activeSlide={slide - 1}
          />
        </div>
      </div>
    </div>
  );
};

export default VisionSlider;

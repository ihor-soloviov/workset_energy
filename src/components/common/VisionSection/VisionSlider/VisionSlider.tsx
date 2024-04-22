'use client';

import React, { useRef, useState } from 'react';
import styles from './VisionSlider.module.css';
import { inter } from '@/utils/fonts';
import Button from '../../Button/Button';
import ArrowIcon from '/public/icons/slide-arrow.svg';
import Image from 'next/image';
import { visionImages, visionItems } from './slides';
import SliderDots from '../../SliderDots/SliderDots';
import { useGlobalStore } from '@/store/global-store';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

const VisionSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isDesktop } = useGlobalStore();
  const swiperRef = useRef<SwiperType>();

  console.log(activeIndex);

  const handlePrevClick = () =>
    setActiveIndex(prev => (prev === 0 ? 2 : prev - 1));

  const handleNextClick = () =>
    setActiveIndex(prev => (prev === 2 ? 0 : prev + 1));

  const addVisibleClass = (activeIndex: number, expectedSlides: number[]) =>
    expectedSlides.includes(activeIndex) ? styles.visible : '';

  const handleActiveSlide = (index: number) => {
    setActiveIndex(index);
    !isDesktop && swiperRef.current && swiperRef.current.slideTo(index);
  };

  return (
    <div className={styles.visionMainWrap}>
      {isDesktop ? (
        <>
          <div className={styles.visionImgWrap}>
            <div className={styles.visionImgContainer}>
              {visionImages.map(
                ({ mobile, desktop, className, rangeSlides }, index) => (
                  <React.Fragment key={index}>
                    <Image
                      loading="lazy"
                      className={`${styles.visionImgMob} ${styles[className]} ${addVisibleClass(activeIndex, rangeSlides)}`}
                      src={mobile}
                      alt="img"
                    />
                    <Image
                      loading="lazy"
                      className={`${styles.visionImgDesc} ${styles[className]} ${addVisibleClass(activeIndex, rangeSlides)}`}
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
              0<span className={styles.visionCountSpan}>{activeIndex + 1}</span>
            </p>
            {visionItems.map(({ text, title }, index) => (
              <div
                key={title}
                className={`${styles.visionTextContainer} ${activeIndex === index ? styles.active : ''}`}
              >
                <h2 className={styles.visionTitle}>{title}</h2>
                <p className={`${styles.visionText} ${inter.className}`}>
                  {text}
                </p>
              </div>
            ))}
            <div className={styles.visionDotsWrap}>
              <SliderDots
                handleActiveSlide={handleActiveSlide}
                count={3}
                activeSlide={activeIndex}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <Swiper
            className={styles.sliderMainList}
            modules={[Autoplay, Navigation]}
            spaceBetween={25}
            onActiveIndexChange={e => setActiveIndex(e.realIndex)}
            loop={true}
            slidesPerView={1}
            onBeforeInit={swiper => {
              swiperRef.current = swiper;
            }}
          >
            {visionImages.map(({ mobile, desktop }, index) => (
              <SwiperSlide key={index}>
                <div className={styles.visionImgWrap}>
                  <div className={styles.visionImgContainer}>
                    <React.Fragment key={index}>
                      <Image
                        loading="lazy"
                        className={styles.visionImgMob}
                        src={mobile}
                        alt="img"
                      />
                      <Image
                        loading="lazy"
                        className={styles.visionImgDesc}
                        alt="img"
                        src={desktop}
                      />
                    </React.Fragment>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.visionTextWrap}>
            <p className={styles.visionCount}>
              0<span className={styles.visionCountSpan}>{activeIndex + 1}</span>
            </p>
            {visionItems.map(({ text, title }, index) => (
              <div
                key={title}
                className={`${styles.visionTextContainer} ${activeIndex === index ? styles.active : ''}`}
              >
                <h2 className={styles.visionTitle}>{title}</h2>
                <p className={`${styles.visionText} ${inter.className}`}>
                  {text}
                </p>
              </div>
            ))}
            <div className={styles.visionDotsWrap}>
              <SliderDots
                handleActiveSlide={handleActiveSlide}
                count={3}
                activeSlide={activeIndex}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VisionSlider;

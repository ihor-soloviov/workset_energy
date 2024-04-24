'use client';
import 'swiper/css';
import React, { useRef, useState } from 'react';
import { inter } from '@/utils/fonts';
import styles from './VorteileSlider.module.css';
import Button from '../../Button/Button';
import ArrowIcon from '/public/icons/slide-arrow.svg';
import SliderDots from '../../SliderDots/SliderDots';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import { useGlobalStore } from '@/store/global-store';
import Image from 'next/image';
import { vorteileImages, vorteileItems } from '@/utils/pvSlides';

const VorteileSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isDesktop } = useGlobalStore();

  const swiperRef = useRef<SwiperType>();

  const handlePrevClick = () => swiperRef.current?.slidePrev();

  const handleNextClick = () => swiperRef.current?.slideNext();

  const handleActiveSlide = (index: number) => {
    setActiveIndex(index);
    swiperRef.current && swiperRef.current.slideTo(index);
  };

  return (
    <div className={styles.vorteileSliderWrap}>
      <div className={styles.sliderImgWrap}>
        <Swiper
          className={styles.sliderWrap}
          modules={[Autoplay, Navigation]}
          spaceBetween={25}
          onActiveIndexChange={e => setActiveIndex(e.realIndex)}
          loop={true}
          slidesPerView={1}
          onBeforeInit={swiper => {
            swiperRef.current = swiper;
          }}
        >
          {vorteileImages.map(({ mobile, desktop }, index) => (
            <SwiperSlide className={styles.slideWrap} key={index}>
              <Image
                className={styles.sliderImgMob}
                fill
                quality={100}
                alt="slide"
                src={mobile}
              />
              <Image
                className={styles.sliderImgDesk}
                fill
                quality={100}
                alt="slide"
                src={desktop}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.sliderInfoWrap}>
        <div className={styles.sliderInfoContainer}>
          <p className={`${styles.sliderInfoCounter} ${inter.className}`}>
            0{activeIndex + 1}
          </p>

          {vorteileItems.map(({ text, title }, index) => (
            <div
              key={title}
              className={`${styles.sliderInfo} ${activeIndex === index ? styles.active : ''}`}
            >
              <h2
                className={`${styles.sliderTitle}  ${activeIndex === 0 ? styles.first : ''}`}
              >
                {title}
              </h2>
              <p className={`${styles.sliderText} ${inter.className}`}>
                {text}
              </p>
            </div>
          ))}
          <div className={styles.sliderDotsWrap}>
            <SliderDots
              handleActiveSlide={handleActiveSlide}
              count={6}
              className="vorteile"
              activeSlide={activeIndex}
            />
          </div>
          <div className={styles.sliderButtonsWrap}>
            <Button
              handleClick={handlePrevClick}
              type="button"
              className={styles.sliderBtn}
            >
              <ArrowIcon className={styles.prevArrow} />
            </Button>
            <Button
              handleClick={handleNextClick}
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

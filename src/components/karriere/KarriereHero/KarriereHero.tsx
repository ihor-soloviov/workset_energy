'use client';
import Button from '@/components/common/Button/Button';
import React, { useRef } from 'react';
import styles from './KarriereHero.module.css';
import { Swiper as SwiperType } from 'swiper';
import SlideArrowIcon from '/public/icons/slider-karrier-arrow.svg';
import KarriereHeroSlider from './KarriereHeroSlider/KarriereHeroSlider';

const KarriereHero = () => {
  const swiperRef = useRef<SwiperType>();

  return (
    <section className={styles.karriereHeroSection}>
      <Button
        handleClick={() => swiperRef.current?.slidePrev()}
        className={styles.prevSlideBtn}
        type="button"
      >
        <SlideArrowIcon className={styles.slideIcon} />
      </Button>
      <div className={styles.karriereHeroContainer}>
        <div className={styles.heroImgWrap}>
          <KarriereHeroSlider swiperRef={swiperRef} />
        </div>
      </div>
      <Button
        handleClick={() => swiperRef.current?.slideNext()}
        className={styles.nextSlideBtn}
        type="button"
      >
        <SlideArrowIcon className={styles.slideIcon} />
      </Button>
    </section>
  );
};

export default KarriereHero;

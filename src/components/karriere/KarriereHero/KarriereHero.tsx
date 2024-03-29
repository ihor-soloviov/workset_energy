'use client';
import Button from '@/components/common/Button/Button';
import React, { useRef } from 'react';
import styles from './KarriereHero.module.css';
import { Swiper as SwiperType } from 'swiper';
import DropArrowIcon from '/public/icons/drop-arrow.svg';
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
        <DropArrowIcon className={styles.slideIcon} />
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
        <DropArrowIcon className={styles.slideIcon} />
      </Button>
    </section>
  );
};

export default KarriereHero;

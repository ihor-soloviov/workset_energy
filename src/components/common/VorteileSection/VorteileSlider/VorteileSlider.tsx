'use client';
import 'swiper/css';
import React, { useRef, useState } from 'react';
import { inter } from '@/utils/fonts';
import styles from './VorteileSlider.module.css';
import Button from '../../Button/Button';

import SliderDots from '../../SliderDots/SliderDots';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import { pvImages, pvItems } from '@/utils/pvSlides';
import { useGlobalStore } from '@/store/global-store';
import { stormImages, stormItems } from '@/utils/stormSlides';
import { wallImages, wallItems } from '@/utils/wallSlides';
import { usePathname } from 'next/navigation';
import { ImportedImages, VorteileSliderItems } from '@/types/infoTypes';
import Arrow from '../../Arrow/Arrow';

const VorteileSlider = () => {
  const { isDesktop } = useGlobalStore();
  const [activeIndex, setActiveIndex] = useState(0);
  const pathname = usePathname();

  const getCurrentId = () => {
    let id;
    switch (pathname) {
      case '/pv-anlagen':
        id = 'pv-vorteile';
        return id;
      case '/stromspeicher':
        id = 'strom-vorteile';
        return id;
      case '/wallbox':
        id = 'wallbox-vorteile';
        return id;

      default:
        id = '';
        return id;
    }
  };

  const getCurrentSlideData = (type: string, pathname: string) => {
    let currentSlideData: any;
    switch (pathname) {
      case '/pv-anlagen':
        currentSlideData = type === 'image' ? pvImages : pvItems;
        return currentSlideData;
      case '/stromspeicher':
        currentSlideData = type === 'image' ? stormImages : stormItems;
        return currentSlideData;
      case '/wallbox':
        currentSlideData = type === 'image' ? wallImages : wallItems;
        return currentSlideData;

      default:
        currentSlideData = [];
    }
    return currentSlideData;
  };

  const swiperRef = useRef<SwiperType>();

  const handlePrevClick = () => swiperRef.current?.slidePrev();

  const handleNextClick = () => swiperRef.current?.slideNext();

  const getCurrentDots = () => {
    let currentDots;
    switch (pathname) {
      case '/stromspeicher':
        currentDots = 2;
        return currentDots;
      case '/pv-anlagen':
        currentDots = 5;
        return currentDots;
      case '/wallbox':
        currentDots = 6;
        return currentDots;

      default:
        currentDots = 0;
        return currentDots;
    }
  };

  const handleActiveSlide = (index: number) => {
    setActiveIndex(index);
    swiperRef.current && swiperRef.current.slideTo(index);
  };

  return (
    <div id={getCurrentId()} className={styles.vorteileSliderWrap}>
      <div className={styles.sliderImgWrap}>
        <Swiper
          className={styles.sliderWrap}
          modules={[Autoplay, Navigation]}
          onActiveIndexChange={e => setActiveIndex(e.realIndex)}
          loop={true}
          spaceBetween={!isDesktop ? 10 : 0}
          slidesPerView={1}
          onBeforeInit={swiper => {
            swiperRef.current = swiper;
          }}
        >
          {getCurrentSlideData('image', pathname).map(
            ({ mobile, desktop }: ImportedImages, index: number) => (
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
            ),
          )}
        </Swiper>
      </div>

      <div
        className={`${styles.sliderInfoWrap} ${pathname === '/pv-anlagen' ? styles.pvAnlagen : ''}`}
      >
        <div
          className={`${styles.sliderInfoContainer} ${pathname === '/stromspeicher' ? styles.storm : ''}`}
        >
          <p className={`${styles.sliderInfoCounter} ${inter.className}`}>
            0{activeIndex + 1}
          </p>

          {getCurrentSlideData('', pathname).map(
            ({ text, title }: VorteileSliderItems, index: number) => (
              <div
                key={title}
                className={`${styles.sliderInfo} ${activeIndex === index ? styles.active : ''}`}
              >
                <h2
                  className={`${styles.sliderTitle} ${pathname === '/stromspeicher' ? styles.storm : ''}`}
                >
                  {title}
                </h2>
                <p className={`${styles.sliderText} ${inter.className}`}>
                  {text}
                </p>
              </div>
            ),
          )}
          <div className={styles.sliderDotsWrap}>
            <SliderDots
              handleActiveSlide={handleActiveSlide}
              count={getCurrentDots()}
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
              <Arrow className={styles.prevArrow} />
            </Button>
            <Button
              handleClick={handleNextClick}
              type="button"
              className={styles.sliderBtn}
            >
              <Arrow className={styles.nextArrow} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VorteileSlider;

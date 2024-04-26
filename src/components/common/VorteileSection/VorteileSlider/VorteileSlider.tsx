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
import Image from 'next/image';
import { pvImages, pvItems } from '@/utils/pvSlides';
import { stormImages, stormItems } from '@/utils/stormSlides';
import { wallImages, wallItems } from '@/utils/wallSlides';
import { usePathname } from 'next/navigation';
import {
  ImportedImages,
  VorteileSliderItems,
  TitleText,
} from '@/types/infoTypes';

const VorteileSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pathname = usePathname();

  const getCurrentSlideData = (type: string, pathname: string) => {
    let currentSlideData: any;
    switch (pathname) {
      case '/pv-anlagen':
        currentSlideData = type === 'image' ? pvImages : pvItems;
        return currentSlideData;
      case '/stormspeicher':
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
          onActiveIndexChange={e => setActiveIndex(e.realIndex)}
          loop={true}
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

      <div className={styles.sliderInfoWrap}>
        <div className={styles.sliderInfoContainer}>
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
                  className={`${styles.sliderTitle}  ${activeIndex === 0 ? styles.first : ''}`}
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
              count={pathname === '/stormspeicher' ? 5 : 6}
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

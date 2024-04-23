'use client';
import 'swiper/css';
import React, { useRef, useState } from 'react';
import styles from './TeamSlider.module.css';
import { inter } from '@/utils/fonts';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { useGlobalStore } from '@/store/global-store';
import { teamItems } from './teamItems';
import Link from 'next/link';
import SliderDots from '../../SliderDots/SliderDots';

const TeamSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isDesktop } = useGlobalStore();
  const swiperRef = useRef<SwiperType>();

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = (index: number) => {
    activeIndex !== index && setActiveIndex(0);
  };

  const handleActiveSlide = (index: number) => {
    setActiveIndex(index);
    swiperRef.current && swiperRef.current.slideTo(index);
  };

  return (
    <div className={styles.teamImgMainWrap}>
      {!isDesktop ? (
        <>
          <Swiper
            className={styles.sliderWrap}
            onActiveIndexChange={e => setActiveIndex(e.realIndex)}
            spaceBetween={15}
            loop={true}
            slidesPerView={1}
            onBeforeInit={swiper => {
              swiperRef.current = swiper;
            }}
          >
            {teamItems.map(({ textMob, title, className }, index) => (
              <SwiperSlide key={index}>
                <div className={`${styles.teamImgWrap} ${styles[className]}`}>
                  <div className={styles.teamTextWrap}>
                    <h3 className={styles.teamImgTitle}>{title}</h3>
                    <p className={styles.teamImgText}>{textMob}</p>
                    <div className={styles.teamImgBtnWrap}>
                      <Link className={styles.teamImgLink} href="">
                        E-Mail
                      </Link>
                      <Link className={styles.teamImgLink} href="">
                        Telefon
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <SliderDots
            className={'team'}
            count={8}
            activeSlide={activeIndex}
            handleActiveSlide={handleActiveSlide}
          />
        </>
      ) : (
        <>
          {teamItems
            .slice(0, 3)
            .map(({ textDesk, title, className }, index) => (
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                key={index}
                className={cn(styles.teamImgWrap, styles[className], {
                  [styles.active]: activeIndex === index,
                })}
              >
                <div className={styles.teamTextWrap}>
                  <h3 className={styles.teamImgTitle}>{title}</h3>
                  <p className={`${styles.teamImgText} ${inter.className}`}>
                    {textDesk}
                  </p>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default TeamSlider;

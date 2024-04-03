'use client';
import 'swiper/css';
import React, { useState } from 'react';
import styles from './TeamSlider.module.css';
import { inter } from '@/utils/fonts';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useGlobalStore } from '@/store/global-store';
import { teamItems } from './teamItems';

const TeamSlider = () => {
  const [activeItem, setActiveItem] = useState(1);
  const { isDesktop } = useGlobalStore();

  const handleItemClick = (num = 1) => setActiveItem(num);

  return (
    <div className={styles.teamImgMainWrap}>
      {!isDesktop ? (
        <Swiper
          className={styles.sliderWrap}
          modules={[Autoplay]}
          spaceBetween={15}
          loop={true}
          autoplay={true}
          slidesPerView={1}
        >
          {teamItems.map(({ text, title, className }, index) => (
            <SwiperSlide key={index}>
              <div className={`${styles.teamImgWrap} ${styles[className]}`}>
                <div className={styles.teamTextWrap}>
                  <h3 className={styles.teamImgTitle}>{title}</h3>
                  <p className={`${styles.teamImgText} ${inter.className}`}>
                    {text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <>
          {teamItems.map(({ text, title, className }, index) => (
            <div
              key={index}
              onClick={() => handleItemClick(index + 1)}
              className={cn(styles.teamImgWrap, styles[className], {
                [styles.active]: activeItem === index + 1,
              })}
            >
              <div className={styles.teamTextWrap}>
                <h3 className={styles.teamImgTitle}>{title}</h3>
                <p className={`${styles.teamImgText} ${inter.className}`}>
                  {text}
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

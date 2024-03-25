'use client';

import React, { useEffect, useState } from 'react';
import styles from './TeamSlider.module.css';
import { inter } from '@/utils/fonts';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

type TeamItem = {
  title: string;
  text: string;
  className: string;
};

const TeamSlider = () => {
  const teamItems: TeamItem[] = [
    { title: 'Eric Blumenstein', text: 'Fachberater', className: 'first' },
    { title: 'Eric Blumenstein', text: 'Fachberater', className: 'second' },
    { title: 'Eric Blumenstein', text: 'Fachberater', className: 'third' },
  ];

  const [activeItem, setActiveItem] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleItemClick = (num = 1) => setActiveItem(num);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 1728);

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1728);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

'use client';
import 'swiper/css';
import React, { useEffect, useRef, useState } from 'react';
import styles from './TeamSlider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { teamItems } from './teamItems';
import SliderDots from '../../SliderDots/SliderDots';
import TeamModal from './TeamModal/TeamModal';
import Button from '../../Button/Button';
import LocationIcon from '/public/icons/team-location.svg';

const TeamSlider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType>();

  const toggleModal = () => setIsModalOpen(!isModalOpen);

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

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isModalOpen]);

  return (
    <div className={styles.teamImgMainWrap}>
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
        {teamItems.map(({ text, title, className }, index) => (
          <SwiperSlide key={index}>
            <div className={`${styles.teamImgWrap} ${styles[className]}`}>
              <div className={styles.teamTopWrap}>
                <LocationIcon className={styles.teamImgIcon} />
                <p className={styles.teamImgText}>{text}</p>
              </div>
              <div className={styles.teamTextWrap}>
                <h3 className={styles.teamImgTitle}>{title}</h3>

                <Button
                  handleClick={toggleModal}
                  className={styles.teamImgBtn}
                  type="button"
                >
                  Jetzt Termin buchen
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderDots
        className={'team'}
        count={6}
        activeSlide={activeIndex}
        handleActiveSlide={handleActiveSlide}
      />

      <TeamModal
        title={teamItems[activeIndex].title}
        email={teamItems[activeIndex].email}
        tel={teamItems[activeIndex].tel}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
      />
    </div>
  );
};

export default TeamSlider;

{
  /* <>
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
</> */
}

'use client';
import 'swiper/css';
import { useRef, useState } from 'react';
import styles from './ObjectSlider.module.css';
import Image from 'next/image';
import Button from '@/components/common/Button/Button';
import { objectItems } from './slides';
import LocationIcon from '/public/icons/location.svg';

import { inter } from '@/utils/fonts';
import { scrollToSection } from '@/utils/scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import SliderDots from '@/components/common/SliderDots/SliderDots';
import { useGlobalStore } from '@/store/global-store';
import Arrow from '@/components/common/Arrow/Arrow';

const ObjectSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isDesktop } = useGlobalStore();
  const swiperRef = useRef<SwiperType>();

  const handleActiveSlide = (index: number) => {
    setActiveIndex(index);
    swiperRef.current && swiperRef.current.slideTo(index);
  };
  return (
    <div className={styles.sliderMainWrap}>
      <div className={styles.sliderButtonsWrap}>
        <Button
          handleClick={() => swiperRef.current?.slidePrev()}
          type="button"
          className={styles.sliderNavBtn}
        >
          <Arrow className={styles.prevArrow} />
        </Button>
        <Button
          handleClick={() => swiperRef.current?.slideNext()}
          type="button"
          className={styles.sliderNavBtn}
        >
          <Arrow className={styles.nextArrow} />
        </Button>
      </div>
      <Swiper
        className={styles.sliderMainList}
        modules={[Navigation]}
        spaceBetween={25}
        loop={true}
        onActiveIndexChange={e => setActiveIndex(e.realIndex)}
        slidesPerView={1}
        onBeforeInit={swiper => {
          swiperRef.current = swiper;
        }}
      >
        {objectItems.map(({ standort, textList, mobile, desktop }, index) => (
          <SwiperSlide className={styles.slide} key={index}>
            <div className={styles.sliderMainItem}>
              <Image
                quality={100}
                className={styles.sliderImgMob}
                src={mobile}
                alt="slide"
              />
              <Image
                quality={100}
                className={styles.sliderImgDesk}
                src={desktop}
                alt="slide"
              />

              <div className={styles.sliderWrap}>
                <div className={styles.sliderTopWrap}>
                  <div className={styles.sliderIconWrap}>
                    <LocationIcon className={styles.sliderIcon} />
                    <p className={`${styles.sliderTopText} ${inter.className}`}>
                      Standort:
                    </p>
                  </div>
                  <h3 className={styles.sliderTitle}>{standort}</h3>
                </div>
                <div className={styles.sliderBottomWrap}>
                  <ul className={`${styles.sliderList} ${inter.className}`}>
                    {textList.map((text, index) => (
                      <li className={styles.sliderItem} key={index}>
                        <p className={styles.sliderText}>{text}</p>
                      </li>
                    ))}
                  </ul>
                  <Button
                    handleClick={() => scrollToSection('kontact')}
                    className={styles.sliderBtn}
                    type="button"
                  >
                    Zum Angebot
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {!isDesktop && (
        <SliderDots
          className={'team'}
          count={5}
          activeSlide={activeIndex}
          handleActiveSlide={handleActiveSlide}
        />
      )}
    </div>
  );
};

export default ObjectSlider;

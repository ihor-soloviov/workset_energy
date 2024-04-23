'use client';
import { useRef } from 'react';
import styles from './ObjectSlider.module.css';
import Image from 'next/image';
import Button from '@/components/common/Button/Button';
import { objectItems } from './slides';
import LocationIcon from '/public/icons/location.svg';
import ArrowIcon from '/public/icons/slide-arrow.svg';
import { inter } from '@/utils/fonts';
import { scrollToSection } from '@/utils/scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

const ObjectSlider = () => {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className={styles.sliderMainWrap}>
      <div className={styles.sliderButtonsWrap}>
        <Button
          handleClick={() => swiperRef.current?.slidePrev()}
          type="button"
          className={styles.sliderNavBtn}
        >
          <ArrowIcon className={styles.prevArrow} />
        </Button>
        <Button
          handleClick={() => swiperRef.current?.slideNext()}
          type="button"
          className={styles.sliderNavBtn}
        >
          <ArrowIcon className={styles.nextArrow} />
        </Button>
      </div>
      <Swiper
        className={styles.sliderMainList}
        modules={[Navigation]}
        spaceBetween={25}
        loop={true}
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
                    handleClick={() => scrollToSection('contact')}
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
    </div>
  );
};

export default ObjectSlider;

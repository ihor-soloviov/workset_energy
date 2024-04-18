'use client';
import { useEffect, useState } from 'react';
import styles from './ObjectSlider.module.css';
import Image from 'next/image';
import Button from '@/components/common/Button/Button';
import { objectItems } from './slides';
import LocationIcon from '/public/icons/location.svg';
import ArrowIcon from '/public/icons/slide-arrow.svg';
import { inter } from '@/utils/fonts';
import { scrollToSection } from '@/utils/scroll';

const ObjectSlider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handlePrevSlide = () =>
    setActiveSlideIndex(prev => (prev === 0 ? 4 : prev - 1));

  const handleNextSlide = () =>
    setActiveSlideIndex(prev => (prev === 4 ? 0 : prev + 1));

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextSlide();
    }, 4000);
    return () => clearTimeout(timer);
  }, [activeSlideIndex]);

  return (
    <div className={styles.sliderMainWrap}>
      <div className={styles.sliderButtonsWrap}>
        <Button
          handleClick={handlePrevSlide}
          type="button"
          className={styles.sliderNavBtn}
        >
          <ArrowIcon className={styles.prevArrow} />
        </Button>
        <Button
          handleClick={handleNextSlide}
          type="button"
          className={styles.sliderNavBtn}
        >
          <ArrowIcon className={styles.nextArrow} />
        </Button>
      </div>
      <ul className={styles.sliderMainList}>
        {objectItems.map(({ standort, textList, mobile, desktop }, index) => (
          <li
            key={index}
            className={`${styles.sliderMainItem} ${activeSlideIndex === index ? styles.active : ''}`}
          >
            <Image className={styles.sliderImgMob} src={mobile} alt="slide" />
            <Image className={styles.sliderImgDesk} src={desktop} alt="slide" />

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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ObjectSlider;

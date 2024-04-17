'use client';
import { useState } from 'react';
import styles from './ObjectSlider.module.css';
import Image from 'next/image';
import Button from '@/components/common/Button/Button';
import { objectItems, objectImages } from './slides';
import LocationIcon from '/public/icons/location.svg';
import ArrowIcon from '/public/icons/slide-arrow.svg';
import { inter } from '@/utils/fonts';
import { scrollToContact } from '@/utils/scroll';

const ObjectSlider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  console.log(activeSlideIndex);

  const handlePrevSlide = () =>
    setActiveSlideIndex(prev => (prev === 0 ? 2 : prev - 1));

  const handleNextSlide = () =>
    setActiveSlideIndex(prev => (prev === 2 ? 0 : prev + 1));

  const renderText = (key: string) => {
    switch (key) {
      case 'gesamtleistung':
        return 'PV-Anlage Gesamtleistung:';
      case 'stückzahl':
        return 'Stückzahl der Module:';
      case 'speichersystem':
        return 'Speichersystem:';
      default:
        return;
    }
  };

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
      <div className={styles.sliderMainItem}>
        <Image
          className={styles.sliderImgMob}
          src={objectImages[activeSlideIndex].mobile}
          alt="slide"
        />
        <Image
          className={styles.sliderImgDesk}
          src={objectImages[activeSlideIndex].desktop}
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
            <h3 className={styles.sliderTitle}>
              {objectItems[activeSlideIndex].standort}
            </h3>
          </div>
          <div className={styles.sliderBottomWrap}>
            <ul className={`${styles.sliderList} ${inter.className}`}>
              {Object.entries(objectItems[activeSlideIndex]).map(
                ([key, value]) =>
                  key !== 'standort' && (
                    <li className={styles.sliderItem} key={key}>
                      <p className={styles.sliderText}>
                        {renderText(key)}{' '}
                        <span className={styles.sliderSpan}>
                          {value} {key === 'gesamtleistung' && 'kWp'}{' '}
                          {key === 'speichersystem' && 'kWh'}
                        </span>
                      </p>
                    </li>
                  ),
              )}
            </ul>
            <Button
              handleClick={scrollToContact}
              className={styles.sliderBtn}
              type="button"
            >
              Zum Angebot
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectSlider;

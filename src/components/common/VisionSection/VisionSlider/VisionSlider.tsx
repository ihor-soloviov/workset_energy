'use client';

import React, { useState } from 'react';
import styles from './VisionSlider.module.css';
import { inter } from '@/utils/fonts';
import Button from '../../Button/Button';
import ArrowIcon from '/public/icons/slide-arrow.svg';
import Image from 'next/image';
import visionFirstImgMob from '/public/images/common/vision-1-mob.jpg';
import visionSecondImgMob from '/public/images/common/vision-2-mob.jpg';
import visionThirdImgMob from '/public/images/common/vision-3-mob.jpg';
import visionFirstImgDesc from '/public/images/common/vision-1-desc.jpg';
import visionSecondImgDesc from '/public/images/common/vision-2-desc.jpg';
import visionThirdImgDesc from '/public/images/common/vision-3-desc.jpg';
import { VisionImageItem, VisionLinkItem } from '@/types/infoTypes';
import SliderDots from '../../SliderDots/SliderDots';

const VisionSlider = () => {
  const [slide, setSlide] = useState(1);

  const visionItems: VisionLinkItem[] = [
    {
      title: 'Unsere Vision',
      text: 'Unsere Vision ist es, einen positiven Einfluss auf die Umwelt zu haben und gleichzeitig unseren Kunden zu helfen, Geld zu sparen und ihre Energiekosten langfristig zu senken. Wir sind stolz darauf, an einer besseren Zukunft zu arbeiten, und sind bestrebt, unser Engagement für Nachhaltigkeit und erneuerbare Energiequellen fortzusetzen',
    },
    {
      title: 'Unsere Mission',
      text: 'Unser Unternehmen hat die Mission, eine nachhaltige Energieversorgung zu fördern, indem wir Photovoltaik-Anlagen bauen. Wir glauben daran, dass erneuerbare Energiequellen der Schlüssel zur Bekämpfung des Klimawandels sind, und deshalb arbeiten wir hart daran, saubere und effiziente Energiequellen zugänglicher zu machen',
    },
    {
      title: 'Unsere Ziel',
      text: 'Unser Ziel ist es Deutschland und Europa von fossilen Energieträgern loszulösen. Deutschland muss als Unternehmensstandort attraktiv bleiben!',
    },
  ];

  const visionImages: VisionImageItem[] = [
    {
      mobile: visionFirstImgMob,
      desktop: visionFirstImgDesc,
      className: 'first',
      rangeSlides: [1],
    },
    {
      mobile: visionSecondImgMob,
      desktop: visionSecondImgDesc,
      className: 'second',
      rangeSlides: [1, 2],
    },
    {
      mobile: visionThirdImgMob,
      desktop: visionThirdImgDesc,
      className: 'third',
      rangeSlides: [1, 2, 3],
    },
  ];

  const handlePrevClick = () => setSlide(prev => (prev === 1 ? 3 : prev - 1));

  const handleNextClick = () => setSlide(prev => (prev === 3 ? 1 : prev + 1));

  const addVisibleClass = (slide: number, expectedSlides: number[]) =>
    expectedSlides.includes(slide) ? styles.visible : '';

  const handleActiveSlide = (index: number) => setSlide(index + 1);

  return (
    <div className={styles.visionMainWrap}>
      <div className={styles.visionImgWrap}>
        <div className={styles.visionImgContainer}>
          {visionImages.map(
            ({ mobile, desktop, className, rangeSlides }, index) => (
              <React.Fragment key={index}>
                <Image
                  loading="lazy"
                  className={`${styles.visionImgMob} ${styles[className]} ${addVisibleClass(slide, rangeSlides)}`}
                  src={mobile}
                  alt="img"
                />
                <Image
                  loading="lazy"
                  className={`${styles.visionImgDesc} ${styles[className]} ${addVisibleClass(slide, rangeSlides)}`}
                  alt="img"
                  src={desktop}
                />
              </React.Fragment>
            ),
          )}
        </div>
      </div>
      <div className={styles.visionBtnWrap}>
        <Button
          handleClick={handlePrevClick}
          type="button"
          className={styles.visionBtn}
        >
          <ArrowIcon className={styles.prevArrow} />
        </Button>
        <Button
          handleClick={handleNextClick}
          type="button"
          className={styles.visionBtn}
        >
          <ArrowIcon className={styles.nextArrow} />
        </Button>
      </div>
      <div className={styles.visionTextWrap}>
        <p className={styles.visionCount}>
          0<span className={styles.visionCountSpan}>{slide}</span>
        </p>
        {visionItems.map(({ text, title }, index) => (
          <div
            key={title}
            className={`${styles.visionTextContainer} ${slide === index + 1 ? styles.active : ''}`}
          >
            <h2 className={styles.visionTitle}>{title}</h2>
            <p className={`${styles.visionText} ${inter.className}`}>{text}</p>
          </div>
        ))}
        <div className={styles.visionDotsWrap}>
          <SliderDots
            handleActiveSlide={handleActiveSlide}
            count={3}
            activeSlide={slide - 1}
          />
        </div>
      </div>
    </div>
  );
};

export default VisionSlider;

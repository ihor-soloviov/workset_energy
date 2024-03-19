'use client';

import styles from './VisionSection.module.css';

import { inter } from '@/utils/fonts';
import Button from '../Button/Button';
import VisionSlider from './VisionSlider/VisionSlider';
import ArrowIcon from '/public/icons/slide-arrow.svg';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import visionFirstImgMob from '/public/images/vision-1-mob.png';
import visionSecondImgMob from '/public/images/vision-2-mob.png';
import visionThirdImgMob from '/public/images/vision-3-mob.png';
import visionFirstImgDesc from '/public/images/vision-1-desc.png';
import visionSecondImgDesc from '/public/images/vision-2-desc.png';
import visionThirdImgDesc from '/public/images/vision-3-desc.png';
import { useState } from 'react';

type VisionLinkItem = {
  title: string;
  text: string;
};
type VisionImageItem = {
  mobile: StaticImageData;
  desktop: StaticImageData;
  class: string;
};

const VisionSection = () => {
  const [slide, setSlide] = useState(1);

  const handlePrevClick = () => {
    if (slide === 1) {
      return;
    }
    setSlide(slide - 1);
  };
  const handleNextClick = () => {
    if (slide === 3) {
      return;
    }
    setSlide(slide + 1);
  };

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
      class: 'first',
    },
    {
      mobile: visionSecondImgMob,
      desktop: visionSecondImgDesc,
      class: 'second',
    },
    {
      mobile: visionThirdImgMob,
      desktop: visionThirdImgDesc,
      class: 'third',
    },
  ];

  return (
    <section className={styles.visionSection}>
      <div className={styles.visionMainWrap}>
        <div className={styles.visionImgWrap}>
          <div className={styles.visionImgContainer}>
            <Image
              className={`${styles.visionImgMob} ${styles.first}  ${slide === 1 ? styles.visible : ''}`}
              src={visionFirstImgMob}
              alt="img"
            />
            <Image
              className={`${styles.visionImgDesc} ${styles.first} ${slide === 1 ? styles.visible : ''}`}
              alt="img"
              src={visionFirstImgDesc}
            />
            <Image
              className={`${styles.visionImgMob} ${styles.second} ${slide === 1 || slide === 2 ? styles.visible : ''}`}
              src={visionSecondImgMob}
              alt="img"
            />
            <Image
              className={`${styles.visionImgDesc} ${styles.second} ${slide === 1 || slide === 2 ? styles.visible : ''}`}
              alt="img"
              src={visionSecondImgDesc}
            />
            <Image
              className={`${styles.visionImgMob} ${styles.third} ${slide === 1 || slide === 2 || slide === 3 ? styles.visible : ''}`}
              src={visionThirdImgMob}
              alt="img"
            />
            <Image
              className={`${styles.visionImgDesc} ${styles.third} ${slide === 1 || slide === 2 || slide === 3 ? styles.visible : ''}`}
              alt="img"
              src={visionThirdImgDesc}
            />
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
              <p className={`${styles.visionText} ${inter.className}`}>
                {text}
              </p>
            </div>
          ))}
          <div className={styles.visionDotsWrap}>
            <div
              className={`${styles.visionDot} ${slide === 1 ? styles.active : ''}`}
            ></div>
            <div
              className={`${styles.visionDot} ${slide === 2 ? styles.active : ''}`}
            ></div>
            <div
              className={`${styles.visionDot} ${slide === 3 ? styles.active : ''}`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;

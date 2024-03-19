'use client';

import styles from './VisionSection.module.css';

import { inter } from '@/utils/fonts';
import Button from '../Button/Button';
import VisionSlider from './VisionSlider/VisionSlider';
import ArrowIcon from '/public/icons/slide-arrow.svg';

import { StaticImageData } from 'next/image';
import Image from 'next/image';
import visionFirstImgMob from '/public/images/vision-1-mob.png';
import visionSecondImgMob from '/public/images/vision-2-mob.png';
import visionThirdImgMob from '/public/images/vision-3-mob.png';
import visionFirstImgDesc from '/public/images/vision-1-desc.png';
import visionSecondImgDesc from '/public/images/vision-1-desc.png';
import visionThirdImgDesc from '/public/images/vision-1-desc.png';
import { useState } from 'react';

type VisionLinkItem = {
  title: string;
  text: string;
  imgMob: StaticImageData;
  imgDesc: StaticImageData;
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
      imgMob: visionFirstImgMob,
      imgDesc: visionFirstImgDesc,
    },
    {
      title: 'Unsere Mission',
      text: 'Unser Unternehmen hat die Mission, eine nachhaltige Energieversorgung zu fördern, indem wir Photovoltaik-Anlagen bauen. Wir glauben daran, dass erneuerbare Energiequellen der Schlüssel zur Bekämpfung des Klimawandels sind, und deshalb arbeiten wir hart daran, saubere und effiziente Energiequellen zugänglicher zu machen',
      imgMob: visionSecondImgMob,
      imgDesc: visionSecondImgDesc,
    },
    {
      title: 'Unsere Ziel',
      text: 'Unser Ziel ist es Deutschland und Europa von fossilen Energieträgern loszulösen. Deutschland muss als Unternehmensstandort attraktiv bleiben!',
      imgMob: visionThirdImgMob,
      imgDesc: visionThirdImgDesc,
    },
  ];

  return (
    <section className={styles.visionSection}>
      {visionItems.map(({ text, title, imgDesc, imgMob }, index) => (
        <div
          className={`${styles.visionMainWrap} ${slide === index + 1 ? styles.active : ''}`}
          key={text}
        >
          <div className={styles.visionImgWrap}>
            <div className={styles.visionImgContainer}>
              <Image className={styles.visionImgMob} src={imgMob} alt={title} />
              <Image
                className={styles.visionImgDesc}
                alt={title}
                src={imgDesc}
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
            <div className={styles.visionTextContainer}>
              <h2 className={styles.visionTitle}>{title}</h2>
              <p className={`${styles.visionText} ${inter.className}`}>
                {text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default VisionSection;

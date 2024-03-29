import React from 'react';
import styles from '../VorteileSlider/VorteileSlider.module.css';
import { VorteileSliderT } from '@/types/infoTypes';
import { useSliderStore } from '@/store/sliders-store';
import Image from 'next/image';

type Props = Omit<VorteileSliderT, 'sliderText'>;

const SliderWrap: React.FC<Props> = ({ sliderImages }) => {
  const { currIndex, prevIndex, nextIndex, animateTo } = useSliderStore();

  return (
    <div className={styles.vorteileImageWrap}>
      <Image
        className={`${styles.sliderImgMob} ${styles.prev} ${animateTo === 'toPrev' ? styles[animateTo] : ''}`}
        src={sliderImages[prevIndex].mobile}
        layout="fill"
        objectFit="cover"
        alt="slide"
      />
      <Image
        className={styles.sliderImgMob}
        src={sliderImages[currIndex].mobile}
        layout="fill"
        objectFit="cover"
        alt="slide"
      />
      <Image
        className={`${styles.sliderImgMob} ${styles.next} ${animateTo === 'toNext' ? styles[animateTo] : ''}`}
        src={sliderImages[nextIndex].mobile}
        layout="fill"
        objectFit="cover"
        alt="slide"
      />
      <Image
        className={`${styles.sliderImgDesk} ${styles.prev} ${animateTo === 'toPrev' ? styles[animateTo] : ''}`}
        src={sliderImages[prevIndex].desktop}
        layout="fill"
        objectFit="cover"
        alt="slide"
      />
      <Image
        className={styles.sliderImgDesk}
        src={sliderImages[currIndex].desktop}
        layout="fill"
        objectFit="cover"
        alt="slide"
      />
      <Image
        className={`${styles.sliderImgDesk} ${styles.next} ${animateTo === 'toNext' ? styles[animateTo] : ''}`}
        src={sliderImages[nextIndex].desktop}
        layout="fill"
        objectFit="cover"
        alt="slide"
      />
    </div>
  );
};

export default SliderWrap;

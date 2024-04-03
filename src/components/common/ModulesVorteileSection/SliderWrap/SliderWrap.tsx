import React, { useEffect } from 'react';
import styles from '../VorteileSlider/VorteileSlider.module.css';
import { VorteileSliderT } from '@/types/infoTypes';
import { useSliderStore } from '@/store/sliders-store';
import Image from 'next/image';

type Props = Omit<VorteileSliderT, 'sliderText'>;

const SliderWrap: React.FC<Props> = ({ sliderImages }) => {
  const { currIndex, prevIndex, nextIndex, animateTo, updatePrevIndex } =
    useSliderStore();

  useEffect(() => {
    updatePrevIndex(sliderImages.length);
  }, [sliderImages.length, updatePrevIndex]);

  return (
    <div className={styles.vorteileImageWrap}>
      {sliderImages[prevIndex]?.mobile && (
        <Image
          className={`${styles.sliderImgMob} ${styles.prev} ${animateTo === 'toPrev' ? styles[animateTo] : ''}`}
          src={sliderImages[prevIndex].mobile}
          fill
          loading="lazy"
          alt="slide"
        />
      )}
      <Image
        className={styles.sliderImgMob}
        src={sliderImages[currIndex].mobile}
        fill
        loading="lazy"
        alt="slide"
      />
      <Image
        className={`${styles.sliderImgMob} ${styles.next} ${animateTo === 'toNext' ? styles[animateTo] : ''}`}
        src={sliderImages[nextIndex].mobile}
        fill
        loading="lazy"
        alt="slide"
      />
      {sliderImages[prevIndex]?.desktop && (
        <Image
          className={`${styles.sliderImgDesk} ${styles.prev} ${animateTo === 'toPrev' ? styles[animateTo] : ''}`}
          src={sliderImages[prevIndex].desktop}
          fill
          loading="lazy"
          alt="slide"
        />
      )}
      <Image
        className={styles.sliderImgDesk}
        src={sliderImages[currIndex].desktop}
        fill
        loading="lazy"
        alt="slide"
      />
      <Image
        className={`${styles.sliderImgDesk} ${styles.next} ${animateTo === 'toNext' ? styles[animateTo] : ''}`}
        src={sliderImages[nextIndex].desktop}
        fill
        loading="lazy"
        alt="slide"
      />
    </div>
  );
};

export default SliderWrap;

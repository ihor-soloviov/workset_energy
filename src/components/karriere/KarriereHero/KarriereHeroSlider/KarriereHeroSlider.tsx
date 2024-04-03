'use client';
import 'swiper/css';
import Image from 'next/image';
import { inter } from '@/utils/fonts';
import React, { MutableRefObject } from 'react';
import styles from './KarriereHeroSlider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import { heroItems } from '../heroItems';
import Button from '@/components/common/Button/Button';

type Props = {
  swiperRef: MutableRefObject<SwiperType | undefined>;
};

const KarriereHeroSlider = ({ swiperRef }: Props) => {
  return (
    <Swiper
      className={styles.sliderWrap}
      modules={[Autoplay, Navigation]}
      spaceBetween={15}
      loop={true}
      autoplay={true}
      slidesPerView={1}
      onBeforeInit={swiper => {
        swiperRef.current = swiper;
      }}
    >
      {heroItems.map(({ title, mobile, desktop }, index) => (
        <SwiperSlide className={styles.slide} key={index}>
          <Image
            fill
            alt="hero-slide"
            src={mobile}
            className={styles.heroImgMob}
          />
          <Image
            fill
            alt="hero-slide"
            src={desktop}
            className={styles.heroImgDesk}
          />

          <div className={styles.heroTextWrap}>
            <h2 className={styles.heroTitle}>{title}</h2>
            <p className={`${styles.heroTextMob} ${inter.className}`}>
              <span className={styles.heroSpan}>Entdecke einzigartige</span>
              <span className={styles.heroSpan}>
                Entwicklungsmöglichkeiten in unserem Unternehmen. Komm zu uns,
                um deine Ambitionen zu verwirklichen und neue Höhen in deiner
                Karriere zu erreichen
              </span>
            </p>
            <p className={`${styles.heroTextDesk} ${inter.className}`}>
              Entdecke einzigartige Entwicklungsmöglichkeiten in unserem
              Unternehmen. Komm zu uns, um deine Ambitionen zu verwirklichen und
              neue Höhen in deiner Karriere zu erreichen
            </p>
            <Button className={styles.HeroBtn} type="button">
              Bewerben
            </Button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default KarriereHeroSlider;

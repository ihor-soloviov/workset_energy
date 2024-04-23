'use client';
import 'swiper/css';
import Image from 'next/image';
import { inter } from '@/utils/fonts';
import React, { MutableRefObject } from 'react';
import styles from './KarriereHeroSlider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import { heroItems } from '../heroItems';
import useObserver from '@/hooks/useObserver';
import Link from 'next/link';

type Props = {
  swiperRef: MutableRefObject<SwiperType | undefined>;
};

const KarriereHeroSlider = ({ swiperRef }: Props) => {
  useObserver(`.${styles.heroTextWrap}`, `${styles.heroTextWrapVisible}`);
  return (
    <Swiper
      className={styles.sliderWrap}
      modules={[Navigation]}
      spaceBetween={15}
      loop={true}
      slidesPerView={1}
      onBeforeInit={swiper => {
        swiperRef.current = swiper;
      }}
    >
      {heroItems.map(({ title, mobile, desktop }, index) => (
        <SwiperSlide className={styles.slide} key={index}>
          <Image
            quality={100}
            fill
            alt="hero-slide"
            priority
            src={mobile}
            className={styles.heroImgMob}
          />
          <Image
            quality={100}
            fill
            alt="hero-slide"
            src={desktop}
            priority
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
            <Link href={'/karriere/jobs'} className={styles.heroLink}>
              Bewerben
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default KarriereHeroSlider;

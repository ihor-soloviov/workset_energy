'use client';
import Button from '@/components/common/Button/Button';
import React, { useEffect, useState } from 'react';
import styles from './KarriereHero.module.css';
import Image from 'next/image';
import { heroItems } from './heroItems';
import { inter } from '@/utils/fonts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import DropArrowIcon from '/public/icons/drop-arrow.svg';

const KarriereHero = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const [isDesktop, setIsDesktop] = useState(false);
  const handlePrevSlide = () =>
    setActiveSlideIndex(prev => (prev === 0 ? 4 : prev - 1));
  const handleNextSlide = () =>
    setActiveSlideIndex(prev => (prev === 4 ? 0 : prev + 1));

  useEffect(() => {
    setIsDesktop(window.innerWidth > 1728);

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1728);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={styles.karriereHeroSection}>
      <Button
        handleClick={handlePrevSlide}
        className={styles.prevSlideBtn}
        type="button"
      >
        <DropArrowIcon className={styles.slideIcon} />
      </Button>
      <div className={styles.karriereHeroContainer}>
        <div className={styles.heroImgWrap}>
          <React.Fragment>
            <Image
              layout="fill"
              objectFit="cover"
              alt="slide"
              src={heroItems[activeSlideIndex].mobile}
              className={styles.heroImgMob}
            />
            <Image
              objectFit="cover"
              layout="fill"
              alt="slide"
              src={heroItems[activeSlideIndex].desktop}
              className={styles.heroImgDesk}
            />
          </React.Fragment>
          <div className={styles.heroTextWrap}>
            <h2 className={styles.heroTitle}>
              {heroItems[activeSlideIndex].title}
            </h2>
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
        </div>
      </div>
      <Button
        handleClick={handleNextSlide}
        className={styles.nextSlideBtn}
        type="button"
      >
        <DropArrowIcon className={styles.slideIcon} />
      </Button>
    </section>
  );
};

export default KarriereHero;

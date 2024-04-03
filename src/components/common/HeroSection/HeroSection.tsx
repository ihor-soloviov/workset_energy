'use client';

import styles from './HeroSection.module.css';
import { inter } from '@/utils/fonts';
import Button from '../Button/Button';
import Image from 'next/image';
import Link from 'next/link';
import ArrowIcon from '/public/icons/small-arrow-btn.svg';
import HeroFormModal from './HeroFormModal/HeroFormModal';
import { useEffect, useState } from 'react';
import { useGlobalStore } from '@/store/global-store';

import { motion } from 'framer-motion';
import { opacityAnimation, textAnimationToRight } from '@/utils/animations';

type HeroProps = {
  imgMob: string;
  imgMobBlur: string;
  imgDesc: string;
  imgDescBlur: string;
  title: string;
  text: string;
  className: string;
};

const HeroSection = ({
  imgMob,
  imgMobBlur,
  imgDesc,
  imgDescBlur,
  title,
  text,
  className,
}: HeroProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isDesktop } = useGlobalStore();

  const handleModalClick = () => setIsModalOpen(!isModalOpen);
  const handleBtnClick = () => {
    if (isDesktop) {
      const teamSection = document.getElementById('team-section');
      teamSection && teamSection.scrollIntoView({ behavior: 'smooth' });
    }

    if (!isDesktop) {
      handleModalClick();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isModalOpen]);

  return (
    <>
      <section className={styles.heroSection}>
        <Image
          className={styles.heroImgMob}
          src={imgMob}
          fill
          placeholder="blur"
          blurDataURL={imgMobBlur}
          alt="hero-img"
        />
        <Image
          className={styles.heroImgDesc}
          src={imgDesc}
          fill
          placeholder="blur"
          blurDataURL={imgDescBlur}
          alt="hero-img"
        />

        <div className={styles.heroContainer}>
          <div className={styles.heroTextWrap}>
            <motion.h2
              className={`${styles.heroMainTitle} ${styles[className]}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0, once: true }}
              variants={textAnimationToRight}
              custom={0}
            >
              {title}
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0, once: true }}
              variants={textAnimationToRight}
              custom={1}
              className={`${styles.heroMainText} ${styles[className]} ${inter.className}`}
            >
              {text}
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0, once: true }}
              variants={opacityAnimation}
              className={styles.heroBtnWrap}
            >
              <Link className={styles.heroLink} href="/leadgen">
                Jetzt Berechnen
                <ArrowIcon className={styles.heroIcon} />
              </Link>
              <Button
                handleClick={handleBtnClick}
                type="button"
                className={styles.heroBtn}
              >
                {!isDesktop ? 'Zum Angebot' : 'Unsere Team'}
              </Button>
            </motion.div>
          </div>
          {isDesktop && (
            <HeroFormModal
              isDesktop={isDesktop}
              handleModalClick={handleModalClick}
            />
          )}
        </div>
      </section>
      {isModalOpen && (
        <HeroFormModal
          isDesktop={isDesktop}
          handleModalClick={handleModalClick}
        />
      )}
    </>
  );
};

export default HeroSection;

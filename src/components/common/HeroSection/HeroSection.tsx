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
import {
  opacityAnimation,
  textAnimationToRight,
} from '@/animations/animations';

type HeroProps = {
  imgMob: string;
  imgDesc: string;
  title: string;
  text: string;
  className: string;
};

const HeroSection = ({
  imgMob,
  imgDesc,
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
          layout="fill"
          objectFit="cover"
          alt="slide"
        />
        <Image
          className={styles.heroImgDesc}
          src={imgDesc}
          layout="fill"
          objectFit="cover"
          alt="slide"
        />

        <div className={styles.heroContainer}>
          <div className={styles.heroTextWrap}>
            <motion.h2
              className={`${styles.heroMainTitle} ${styles[className]}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0 }}
              variants={textAnimationToRight}
              custom={0}
            >
              {title}
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0 }}
              variants={textAnimationToRight}
              custom={1}
              className={`${styles.heroMainText} ${styles[className]} ${inter.className}`}
            >
              {text}
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0 }}
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

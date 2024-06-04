/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import styles from './HeroSection.module.css';
import { inter } from '@/utils/fonts';
import Button from '../Button/Button';
import Image from 'next/image';
import Link from 'next/link';
import HeroFormModal from './HeroFormModal/HeroFormModal';
import { useEffect } from 'react';
import { useGlobalStore } from '@/store/global-store';
import useObserver from '@/hooks/useObserver';
import { useModalStore } from '@/store/hero-store';
import { handleHeader } from '@/utils/handleHeader';
import { scrollToSection } from '@/utils/scroll';
import { usePathname } from 'next/navigation';

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
  const { isDesktop } = useGlobalStore();
  const { handleModal, setIsModalOpen, isModalOpen } = useModalStore();
  const pathname = usePathname();
  useObserver(`.${styles.heroAnim}`, `${styles.heroAnimVisible}`);

  const scrollToTeamSection = () => {
    if (!isDesktop) {
      handleHeader('none');
      handleModal();
      return;
    }
    scrollToSection('team');
  };

  useEffect(() => {
    if (isDesktop) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [isDesktop, setIsModalOpen]);

  useEffect(() => {
    if (isDesktop) {
      return;
    }
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isDesktop, isModalOpen]);

  return (
    <>
      <section className={styles.heroSection}>
        <Image
          className={styles.heroImgMob}
          quality={100}
          src={imgMob}
          fill
          placeholder="blur"
          blurDataURL={imgMobBlur}
          alt="hero-img"
        />
        <Image
          quality={100}
          className={styles.heroImgDesc}
          src={imgDesc}
          fill
          placeholder="blur"
          blurDataURL={imgDescBlur}
          alt="hero-img"
        />

        <div className={styles.heroContainer}>
          <div className={styles.heroTextWrap}>
            <h2
              className={`${styles.heroMainTitle} ${styles.heroAnim} ${styles[className]}`}
            >
              {title}
            </h2>
            <p
              className={`${styles.heroMainText} ${styles.heroAnim} ${styles[className]} ${inter.className}`}
            >
              {text}
            </p>
            <div className={`${styles.heroBtnWrap} ${styles.heroAnim}`}>
              <Link className={styles.heroLink} href="/leadgen#leadgen">
                Jetzt berechnen
              </Link>
              {isDesktop && pathname === '/' ? (
                <Link
                  className={`${styles.heroBtn} ${isDesktop && pathname === '/' ? styles.home : ''}`}
                  href="/#angebot-vergleichen"
                >
                  Angebot Vergleichen
                </Link>
              ) : (
                <Button
                  handleClick={scrollToTeamSection}
                  type="button"
                  className={styles.heroBtn}
                >
                  {!isDesktop ? 'Zum Angebot' : 'Unser Team'}
                </Button>
              )}
              ;
            </div>
          </div>
          {isModalOpen && <HeroFormModal />}
        </div>
      </section>
    </>
  );
};

export default HeroSection;

'use client';
import Button from '@/components/common/Button/Button';
import styles from './UberUnsHero.module.css';
import { inter } from '@/utils/fonts';
import Image from 'next/image';
import uberHeroImgMob from '/public/images/uberuns-page/uberuns-hero-mob.jpg';
import uberHeroImgDesk from '/public/images/uberuns-page/uberuns-hero-desc.jpg';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { opacityAnimation, textAnimationToRight } from '@/utils/animations';

const UberUnsHero = () => {
  return (
    <section className={styles.uberHeroSection}>
      <Image
        className={styles.uberHeroImgMob}
        src={uberHeroImgMob}
        fill
        placeholder="blur"
        blurDataURL={'/images/uberuns-page/uberuns-hero-mob-blur.jpg'}
        alt="hero-img"
      />
      <Image
        className={styles.uberHeroImgDesc}
        src={uberHeroImgDesk}
        fill
        placeholder="blur"
        blurDataURL={'/images/uberuns-page/uberuns-hero-desc-blur.jpg'}
        alt="hero-img"
      />

      <div className={styles.uberHeroContainer}>
        <LazyMotion features={domAnimation}>
          <m.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0, once: true }}
            variants={textAnimationToRight}
            custom={0}
            className={styles.uberHeroTitle}
          >
            Ihr zuverlässiger Partner für
            <br className={styles.uberBr} /> PV-Anlage
          </m.h2>
          <m.p
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0, once: true }}
            variants={textAnimationToRight}
            custom={1}
            className={`${styles.uberHeroText} ${inter.className}`}
          >
            Wir erleichtern Ihnen den Übergang zu einer nachhaltigen Zukunft mit
            Solarlösungen
          </m.p>
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0, once: true }}
            variants={opacityAnimation}
          >
            <Button type="button" className={styles.uberHeroBtn}>
              Mehr Info
            </Button>
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
};

export default UberUnsHero;

'use client';
import styles from './UberUnsHero.module.css';
import { inter } from '@/utils/fonts';
import Image from 'next/image';
import uberHeroImgMob from '/public/images/uberuns-page/uberuns-hero-mob.webp';
import uberHeroImgDesk from '/public/images/uberuns-page/uberuns-hero-desc.webp';
const UberUnsHero = () => {
  return (
    <section className={styles.uberHeroSection}>
      <Image
        quality={100}
        className={styles.uberHeroImgMob}
        src={uberHeroImgMob}
        fill
        placeholder="blur"
        blurDataURL={'/images/uberuns-page/uberuns-hero-mob-blur.webp'}
        alt="hero-img"
      />
      <Image
        quality={100}
        className={styles.uberHeroImgDesc}
        src={uberHeroImgDesk}
        fill
        placeholder="blur"
        blurDataURL={'/images/uberuns-page/uberuns-hero-desc-blur.webp'}
        alt="hero-img"
      />

      <div className={styles.uberHeroContainer}>
        <>
          <h2 className={styles.uberHeroTitle}>
            Dein zuverlässiger Partner für
            <br className={styles.uberBr} /> PV-Anlagen
          </h2>
          <p className={`${styles.uberHeroText} ${inter.className}`}>
            Wir erleichtern dir den Übergang zu einer nachhaltigen Zukunft mit
            Photovoltaik Lösungen
          </p>
        </>
      </div>
    </section>
  );
};

export default UberUnsHero;

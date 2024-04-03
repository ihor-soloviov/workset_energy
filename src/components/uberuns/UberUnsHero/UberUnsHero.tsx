import Button from '@/components/common/Button/Button';
import styles from './UberUnsHero.module.css';
import { inter } from '@/utils/fonts';
import Image from 'next/image';
import uberHeroImgMob from '/public/images/uberuns-page/uberuns-hero-mob.jpg';
import uberHeroImgDesk from '/public/images/uberuns-page/uberuns-hero-desc.jpg';

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
        <h2 className={styles.uberHeroTitle}>
          Ihr zuverlässiger Partner für
          <br className={styles.uberBr} /> PV-Anlage
        </h2>
        <p className={`${styles.uberHeroText} ${inter.className}`}>
          Wir erleichtern Ihnen den Übergang zu einer nachhaltigen Zukunft mit
          Solarlösungen
        </p>
        <Button type="button" className={styles.uberHeroBtn}>
          Mehr Info
        </Button>
      </div>
    </section>
  );
};

export default UberUnsHero;

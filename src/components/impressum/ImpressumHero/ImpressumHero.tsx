import styles from './ImpressumHero.module.css';
import Image from 'next/image';
import impressiumHeroImgMob from '/public/images/impressum-page/impressum-hero-mob.jpg';
import impressiumHeroImgDesk from '/public/images/impressum-page/impressum-hero-desk.jpg';

const ImpressumHero = () => {
  return (
    <section className={styles.impressiumSection}>
      <Image
        className={styles.impressiumHeroImgMob}
        src={impressiumHeroImgMob}
        fill
        placeholder="blur"
        blurDataURL={'/images/uberuns-page/uberuns-hero-mob-blur.jpg'}
        alt="hero-img"
      />
      <Image
        className={styles.impressiumHeroImgDesk}
        src={impressiumHeroImgDesk}
        fill
        placeholder="blur"
        blurDataURL={'/images/uberuns-page/uberuns-hero-desc-blur.jpg'}
        alt="hero-img"
      />
      <div className={styles.impressiumContainer}>
        <h2 className={styles.impressiumTitle}>Impressum</h2>
      </div>
    </section>
  );
};

export default ImpressumHero;

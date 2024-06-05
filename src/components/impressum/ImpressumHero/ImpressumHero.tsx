import styles from './ImpressumHero.module.css';
import Image from 'next/image';
import impressiumHeroImgMob from '/public/images/impressum-page/impressum-hero-mob.webp';
import impressiumHeroImgDesk from '/public/images/impressum-page/impressum-hero-desk.webp';

const ImpressumHero = () => {
  return (
    <section className={styles.impressiumSection}>
      <Image
        quality={100}
        className={styles.impressiumHeroImgMob}
        src={impressiumHeroImgMob}
        fill
        placeholder="blur"
        alt="hero-img"
      />
      <Image
        quality={100}
        className={styles.impressiumHeroImgDesk}
        src={impressiumHeroImgDesk}
        fill
        placeholder="blur"
        alt="hero-img"
      />
      <div className={styles.impressiumContainer}>
        <h2 className={styles.impressiumTitle}>Impressum</h2>
      </div>
    </section>
  );
};

export default ImpressumHero;

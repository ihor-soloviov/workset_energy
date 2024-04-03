import styles from './AngebotSection.module.css';
import { inter } from '@/utils/fonts';
import AngebotForm from './AngebotForm/AngebotForm';
import angebotImgMob from '/public/images/home-page/angebot-mob.jpg';
import angebotImgDesk from '/public/images/home-page/angebot-desc.jpg';
import Image from 'next/image';

const AngebotSection = () => {
  return (
    <section className={styles.angebotSection}>
      <div className={styles.angebotImgWrap}>
        <Image
          className={styles.angebotImgMob}
          src={angebotImgMob}
          fill
          loading="lazy"
          alt="hero-img"
        />
        <Image
          className={styles.angebotImgDesc}
          src={angebotImgDesk}
          fill
          loading="lazy"
          alt="hero-img"
        />
      </div>

      <div className={styles.angebotFormWrap}>
        <h2 className={styles.angebotTitle}>
          Sichere dir dein individuelles Angebot
        </h2>
        <p className={`${styles.angebotMainText} ${inter.className}`}>
          Wir erstellen kostenlos eine unverbindliche und auf dich persönlich
          zugeschnittene Witrschaftlichkeitsanalyse
        </p>
        <AngebotForm />
      </div>
    </section>
  );
};

export default AngebotSection;

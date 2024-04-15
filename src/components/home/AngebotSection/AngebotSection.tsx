import styles from './AngebotSection.module.css';
import { inter } from '@/utils/fonts';
import AngebotForm from './AngebotForm/AngebotForm';
import RecycleTextWrap from '@/components/common/RecycleTextWrap/RecycleTextWrap';
import angebotImgMob from '/public/images/home-page/angebot-mob.jpg';
import angebotImgDesk from '/public/images/home-page/angebot-desk.jpg';
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
        <RecycleTextWrap
          title="Sichere dir dein individuelles Angebot"
          titleClass={styles.angebotTitle}
          text="Wir erstellen kostenlos eine unverbindliche und auf dich persönlich
          zugeschnittene Witrschaftlichkeitsanalyse"
          textClass={`${styles.angebotMainText} ${inter.className}`}
        />

        <AngebotForm />
      </div>
    </section>
  );
};

export default AngebotSection;

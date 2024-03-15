import styles from './AngebotSection.module.css';
import { inter } from '@/utils/fonts';
import AngebotForm from './AngebotForm/AngebotForm';

const AngebotSection = () => {
  return (
    <section className={styles.angebotSection}>
      <div className={styles.angebotImgWrap}></div>

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

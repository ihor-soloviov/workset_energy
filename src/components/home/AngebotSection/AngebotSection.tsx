import styles from './AngebotSection.module.css';
import { inter } from '@/utils/fonts';
import AngebotForm from './AngebotForm/AngebotForm';
import RecycleTextWrap from '@/components/common/RecycleTextWrap/RecycleTextWrap';

const AngebotSection = () => {
  return (
    <section className={styles.angebotSection}>
      <div className={styles.angebotImgWrap}></div>

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

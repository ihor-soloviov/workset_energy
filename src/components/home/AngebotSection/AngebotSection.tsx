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
      <div className={styles.angebotImgMainWrap}>
        <div className={styles.angebotImgWrap}>
          <Image
            quality={100}
            className={styles.angebotImgMob}
            src={angebotImgMob}
            fill
            loading="lazy"
            alt="hero-img"
          />
          <Image
            quality={100}
            className={styles.angebotImgDesc}
            src={angebotImgDesk}
            fill
            loading="lazy"
            alt="hero-img"
          />
        </div>
      </div>

      <div className={styles.angebotFormWrap}>
        <RecycleTextWrap
          title="Vergleiche dein Angebot"
          titleClass={styles.angebotTitle}
          text="Das Team von WorkSET Energy ist jederzeit bereit, dein Angebot zu vergleichen und dir eine objektive Einschätzung zu geben! Lade dein bereits bestehendes Angebot hoch, trage deine Kontaktdaten ein und prüfe, 
wie optimal deine PV-Anlage projektiert ist"
          textClass={`${styles.angebotMainText} ${inter.className}`}
        />

        <AngebotForm />
      </div>
    </section>
  );
};

export default AngebotSection;

'use client';

import dynamic from 'next/dynamic';

import styles from './AngebotSection.module.css';
import { inter } from '@/utils/fonts';
const AngebotForm = dynamic(() => import('./AngebotForm/AngebotForm'), {
  ssr: false,
});
const RecycleTextWrap = dynamic(
  () => import('@/components/common/RecycleTextWrap/RecycleTextWrap'),
  {
    ssr: false,
  },
);
import angebotImgMob from '/public/images/home-page/angebot-mob.jpg';
import angebotImgDesk from '/public/images/home-page/angebot-desk.jpg';
import Image from 'next/image';
import useHashObserver from '@/hooks/useHashObserver';

const AngebotSection = () => {
  useHashObserver('angebot-vergleichen');

  return (
    <section id="angebot-vergleichen" className={styles.angebotSection}>
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
wie optimal deine PV-Anlage projektiert ist."
          textClass={`${styles.angebotMainText} ${inter.className}`}
        />

        <AngebotForm />
      </div>
    </section>
  );
};

export default AngebotSection;

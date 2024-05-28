'use client';

import { inter } from '@/utils/fonts';
import styles from './RegionSection.module.css';
import Button from '@/components/common/Button/Button';
import Image from 'next/image';
import regionImg from '/public/images/home-page/region.png';
import { scrollToSection } from '@/utils/scroll';

const RegionSection = () => {
  return (
    <section className={styles.regionSection}>
      <div className={styles.regionContainer}>
        <h2 className={styles.regionTitle}>Wo findest du uns?</h2>
        <p className={`${styles.regionText} ${inter.className}`}>
          Wir installieren PV-Anlagen nur in den angegebenen Regionen, um den
          höchsten Ansprüchen unserer Kunden im Service gerecht zu werden!
        </p>

        <Button
          handleClick={() => scrollToSection('kontact')}
          className={styles.regionBtn}
          type="button"
        >
          Zum Angebot
        </Button>
      </div>
      <div className={styles.regionImgWrap}>
        <Image className={styles.regionImg} src={regionImg} alt="region" />
      </div>
    </section>
  );
};

export default RegionSection;

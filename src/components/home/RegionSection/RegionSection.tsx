'use client';

import { inter } from '@/utils/fonts';
import styles from './RegionSection.module.css';
import Button from '@/components/common/Button/Button';
import LocationIcon from '/public/icons/location-region.svg';
import RegionImgMob from '/public/icons/region-mob.svg';
import RegionImgDesk from '/public/icons/region-desk.svg';
import { scrollToSection } from '@/utils/scroll';
import { useGlobalStore } from '@/store/global-store';

const RegionSection = () => {
  const { isDesktop } = useGlobalStore();
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
        <div className={styles.regionImgWrap}>
          {['Frankfurt', 'Mannheim', 'Ulm'].map(text => (
            <div className={styles.regionLocationWrap} key={text}>
              <LocationIcon className={styles.regionLocationIcon} />
              <p className={styles.regionLocationText}>{text}</p>
            </div>
          ))}
          {!isDesktop ? (
            <RegionImgMob className={styles.regionImgMob} />
          ) : (
            <RegionImgDesk className={styles.regionImgDesk} />
          )}
        </div>
      </div>
    </section>
  );
};

export default RegionSection;

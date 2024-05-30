'use client';

import Container from '@/components/common/Container/Container';
import AmenitiesList from './AmenitiesList/AmenitiesList';
import styles from './AmenitiesSection.module.css';
import Button from '@/components/common/Button/Button';
import { scrollToSection } from '@/utils/scroll';
import RecycleTextWrap from '@/components/common/RecycleTextWrap/RecycleTextWrap';

const AmenitiesSection = () => {
  return (
    <section className={styles.amenitiesSection}>
      <div className={styles.amenitiesContainer}>
        <RecycleTextWrap
          title="Warum WorkSET Energy?"
          titleClass={styles.amenitiesMainTitle}
        />

        <AmenitiesList />
        <Button
          type="button"
          handleClick={() => scrollToSection('kontact')}
          className={styles.amenitiesMainBtn}
        >
          Zum Angebot
        </Button>
      </div>
    </section>
  );
};

export default AmenitiesSection;

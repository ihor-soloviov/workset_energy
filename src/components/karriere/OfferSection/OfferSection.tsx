'use client';
import styles from './OfferSection.module.css';
import OfferList from './OfferList/OfferList';
import Button from '@/components/common/Button/Button';
import { inter } from '@/utils/fonts';
import { useState } from 'react';

const OfferSection = () => {
  const [showItems, setShowItems] = useState(false);

  const toggleBtnClick = () => setShowItems(!showItems);
  return (
    <section className={styles.offerSection}>
      <div className={styles.offerContainer}>
        <h2 className={styles.offerMainTitle}>Aktuelle Stellenangebote</h2>
        <p className={`${styles.offerMainText} ${inter.className}`}>
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment. Bring to the table win-win
          strategies to ensure domination.
        </p>
        <OfferList showItems={showItems} />

        <Button
          handleClick={toggleBtnClick}
          type="button"
          className={styles.offerMainBtn}
        >
          Mehr Info
        </Button>
      </div>
    </section>
  );
};

export default OfferSection;

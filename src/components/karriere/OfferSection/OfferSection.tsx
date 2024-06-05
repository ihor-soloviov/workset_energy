'use client';
import styles from './OfferSection.module.css';
import OfferList from './OfferList/OfferList';
import Button from '@/components/common/Button/Button';
import { inter } from '@/utils/fonts';
import { useState } from 'react';
import RecycleTextWrap from '@/components/common/RecycleTextWrap/RecycleTextWrap';

const OfferSection = () => {
  const [showItems, setShowItems] = useState(false);

  const toggleBtnClick = () => setShowItems(!showItems);
  return (
    <section className={styles.offerSection}>
      <div className={styles.offerContainer}>
        <RecycleTextWrap
          title="Aktuelle Stellenangebote"
          titleClass={styles.offerMainTitle}
          text="Organically grow the holistic world view of disruptive innovation via
        workplace diversity and empowerment. Bring to the table win-win
        strategies to ensure domination."
          textClass={`${styles.offerMainText} ${inter.className}`}
        />
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

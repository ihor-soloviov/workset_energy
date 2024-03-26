'use client';

import styles from './HeroFormModal.module.css';
import CrossIcon from '/public/icons/cross.svg';
import Button from '../../Button/Button';
import { inter } from '@/utils/fonts';
import { useState } from 'react';
import HeroForm from './HeroForm/HeroForm';

type HeroFormModalProps = {
  handleModalClick: () => void;
  isDesktop: boolean;
};

const HeroFormModal = ({ handleModalClick, isDesktop }: HeroFormModalProps) => {
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  const handleThankYouClick = () => setIsThankYouOpen(!isThankYouOpen);

  const handleBtnCloseClick = () => {
    handleModalClick();
    handleThankYouClick();
  };

  const handleBtnClick = () => {
    !isDesktop && handleModalClick();
    handleThankYouClick();
  };

  return (
    <div
      className={`${styles.heroFormWrap} ${isThankYouOpen ? styles.active : ''}`}
    >
      <div className={styles.heroTopWrap}>
        <Button
          handleClick={handleBtnCloseClick}
          type="button"
          className={styles.heroCloseBtn}
        >
          <CrossIcon className={styles.heroCloseIcon} />
        </Button>
      </div>
      <div className={styles.heroLine}></div>
      <div
        className={`${styles.heroFormContainer} ${isThankYouOpen ? styles.active : ''}`}
      >
        {!isThankYouOpen ? (
          <>
            <h2 className={styles.heroTitle}>Kontaktiere uns</h2>
            <p className={styles.heroText}>
              Bitte fülle das untenstehende Formular aus und wir werden uns in
              Kürze mit dir in Verbindung setzen
            </p>
            <HeroForm handleThankYouClick={handleThankYouClick} />
          </>
        ) : (
          <>
            <h2 className={styles.heroThankTitle}>
              WorkSET Energy sagt Danke!
            </h2>
            <p className={`${styles.heroThankText} ${inter.className}`}>
              Wir haben deine Anfrage erhalten und freuen uns, dich auf deinem
              Weg zu nachhaltiger Energie unterstützen zu dürfen
            </p>
            <Button
              handleClick={handleBtnClick}
              className={styles.heroThankBtn}
              type="button"
            >
              Hauptseite
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default HeroFormModal;

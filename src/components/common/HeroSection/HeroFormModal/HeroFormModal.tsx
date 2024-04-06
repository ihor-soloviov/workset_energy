'use client';

import styles from './HeroFormModal.module.css';
import CrossIcon from '/public/icons/cross.svg';
import Button from '../../Button/Button';
import { inter } from '@/utils/fonts';
import HeroForm from './HeroForm/HeroForm';
import { useThankYouStore } from '@/store/hero-store';
import { useEffect } from 'react';

type HeroFormModalProps = {
  handleModalClick: () => void;
  isDesktop: boolean;
};

const HeroFormModal = ({ handleModalClick, isDesktop }: HeroFormModalProps) => {
  const { isThankYouOpen, setStylesChangedToFalse } = useThankYouStore();

  const handleBtnCloseClick = () => {
    handleModalClick();
    isThankYouOpen && setStylesChangedToFalse();
  };

  const handleBtnClick = () => {
    !isDesktop && handleModalClick();
    isThankYouOpen && setStylesChangedToFalse();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.scrollHeroFormVisible);
        } else {
          entry.target.classList.remove(styles.scrollHeroFormVisible);
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      `.${styles.scrollHeroFormHidden}`,
    );

    setTimeout(() => {
      hiddenElements.forEach(el => observer.observe(el));
    }, 1000);

    // Cleanup function
    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`${styles.heroFormWrap} ${styles.scrollHeroFormHidden} ${isThankYouOpen ? styles.active : ''}`}
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
            <HeroForm />
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

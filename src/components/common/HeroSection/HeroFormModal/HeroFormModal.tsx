'use client';

import styles from './HeroFormModal.module.css';
import CrossIcon from '/public/icons/cross.svg';
import Button from '../../Button/Button';
import { inter } from '@/utils/fonts';
import HeroForm from './HeroForm/HeroForm';
import { useThankYouStore } from '@/store/hero-store';
import { useEffect, useRef } from 'react';

type HeroFormModalProps = {
  handleModalClick: () => void;
  isDesktop: boolean;
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add(styles.scrollHeroFormVisible);
    } else {
      entry.target.classList.remove(styles.scrollHeroFormVisible);
    }
  });
});

const HeroFormModal = ({ handleModalClick, isDesktop }: HeroFormModalProps) => {
  const { isThankYouOpen, setStylesChangedToFalse } = useThankYouStore();

  const hiddenForm = useRef(null);

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
      const entry = entries[0];

      if (entry.isIntersecting) {
        entry.target.classList.add(styles.scrollHeroFormVisible);
      } else {
        entry.target.classList.remove(styles.scrollHeroFormVisible);
      }
    });

    const ref = hiddenForm.current;
    // Перевіряємо, чи елемент доступний, і тоді спостерігаємо за ним
    if (ref) {
      setTimeout(() => {
        observer.observe(ref);
      }, 1000);
    }

    // Функція очищення
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={hiddenForm}
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

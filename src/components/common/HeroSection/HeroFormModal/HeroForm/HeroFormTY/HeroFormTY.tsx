'use client';

import React from 'react';
import styles from '@/components/common/HeroSection/HeroFormModal/HeroFormModal.module.css';
import Button from '@/components/common/Button/Button';
import { inter } from '@/utils/fonts';
import { useThankYouStore } from '@/store/hero-store';
import useObserver from '@/hooks/useObserver';
import { useGlobalStore } from '@/store/global-store';
import { stopScroll } from '@/utils/stopScroll';

const HeroFormTY = () => {
  const { isDesktop } = useGlobalStore();
  const { setIsThankYouOpen, setIsModalOpen } = useThankYouStore();

  useObserver(
    `.${styles.heroThankYouWrap}`,
    `${styles.heroThankYouWrapVisible}`,
  );
  const hideThankYou = () => {
    const ty = document.querySelector(`.${styles.heroThankYouWrap}`);
    if (ty) {
      ty.classList.remove(`${styles.heroThankYouWrapVisible}`);

      setTimeout(() => {
        setIsThankYouOpen();
        stopScroll(false);
        if (isDesktop) {
          setIsModalOpen(true);
        }
      }, 400);
    }
  };

  return (
    <div className={styles.heroThankYouWrap}>
      <h2 className={styles.heroThankTitle}>WorkSET Energy sagt Danke!</h2>
      <p className={`${styles.heroThankText} ${inter.className}`}>
        Wir haben deine Anfrage erhalten und freuen uns, dich auf deinem Weg zu
        nachhaltiger Energie unterstützen zu dürfen
      </p>
      <Button
        handleClick={hideThankYou}
        className={styles.heroThankBtn}
        type="button"
      >
        Hauptseite
      </Button>
    </div>
  );
};

export default HeroFormTY;

'use client';

import React from 'react';
import styles from '@/components/common/HeroSection/HeroFormModal/HeroFormModal.module.css';
import Button from '@/components/common/Button/Button';
import CrossIcon from '/public/icons/cross.svg';
import { inter } from '@/utils/fonts';
import { useThankYouStore } from '@/store/hero-store';
import useObserver from '@/hooks/useObserver';
import { useGlobalStore } from '@/store/global-store';
import { stopScroll } from '@/utils/stopScroll';
import { handleHeader } from '@/utils/handleHeader';

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
      handleHeader('block');
      stopScroll(false);

      setTimeout(() => {
        setIsThankYouOpen();
        if (isDesktop) {
          setIsModalOpen(true);
        }
      }, 100);
    }
  };

  return (
    <div className={styles.heroThankYouWrap}>
      <div className={styles.heroTopWrap}>
        <Button
          handleClick={hideThankYou}
          type="button"
          className={styles.heroCloseBtn}
        >
          <CrossIcon className={styles.heroCloseIcon} />
        </Button>
      </div>
      <div className={styles.heroLine}></div>
      <div className={styles.heroThankYouContainer}>
        <h2 className={styles.heroThankTitle}>WorkSET Energy sagt Danke!</h2>
        <p className={`${styles.heroThankText} ${inter.className}`}>
          Wir haben deine Anfrage erhalten und freuen uns, dich auf deinem Weg
          zu nachhaltiger Energie unterstützen zu dürfen
        </p>
        <Button
          handleClick={hideThankYou}
          className={styles.heroThankBtn}
          type="button"
        >
          Hauptseite
        </Button>
      </div>
    </div>
  );
};

export default HeroFormTY;

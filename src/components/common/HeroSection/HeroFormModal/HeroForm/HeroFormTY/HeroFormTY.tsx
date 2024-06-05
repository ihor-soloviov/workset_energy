'use client';

import React from 'react';
import styles from '@/components/common/HeroSection/HeroFormModal/HeroFormModal.module.css';
import Button from '@/components/common/Button/Button';
import CrossIcon from '/public/icons/cross.svg';
import { inter } from '@/utils/fonts';
import { useModalStore } from '@/store/hero-store';
import useObserver from '@/hooks/useObserver';
import { useGlobalStore } from '@/store/global-store';
import { handleHeader } from '@/utils/handleHeader';
import { useRouter } from 'next/navigation';

const HeroFormTY = () => {
  const router = useRouter();
  const { isDesktop } = useGlobalStore();
  const { setIsModalOpen } = useModalStore();

  useObserver(
    `.${styles.heroThankYouWrap}`,
    `${styles.heroThankYouWrapVisible}`,
  );

  const hideThankYou = () => {
    const ty = document.querySelector(`.${styles.heroThankYouWrap}`);
    if (ty) {
      ty.classList.remove(`${styles.heroThankYouWrapVisible}`);
      handleHeader('flex');
      router.back();

      setTimeout(() => {
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
          zu nachhaltiger Energie unterstützen zu dürfen.
        </p>
        <Button
          handleClick={hideThankYou}
          className={styles.heroThankBtn}
          type="button"
        >
          Home
        </Button>
      </div>
    </div>
  );
};

export default HeroFormTY;

'use client';

import styles from './HeroFormModal.module.css';
import CrossIcon from '/public/icons/cross.svg';
import useObserver from '@/hooks/useObserver';
import Button from '@/components/common/Button/Button';
import HeroForm from './HeroForm/HeroForm';
import { useModalStore } from '@/store/hero-store';
import { handleHeader } from '@/utils/handleHeader';
import { stopScroll } from '@/utils/stopScroll';
import { useRouter } from 'next/navigation';

const HeroFormModal = () => {
  const router = useRouter();
  const { handleModal } = useModalStore();

  const handleModalClose = () => {
    handleHeader('flex');
    handleModal();
  };

  const sendModalForm = () => {
    const form = document.querySelector(`.${styles.scrollHeroFormHidden}`);
    if (form) {
      form.classList.remove(`${styles.scrollHeroFormVisible}`);
    }
    setTimeout(() => {
      handleModal();
      router.push('/thank-you');
    }, 1000);
  };

  useObserver(
    `.${styles.scrollHeroFormHidden}`,
    `${styles.scrollHeroFormVisible}`,
  );

  return (
    <div className={`${styles.heroFormWrap} ${styles.scrollHeroFormHidden}`}>
      <div className={styles.heroTopWrap}>
        <Button
          handleClick={handleModalClose}
          type="button"
          className={styles.heroCloseBtn}
        >
          <CrossIcon className={styles.heroCloseIcon} />
        </Button>
      </div>
      <div className={styles.heroLine}></div>
      <div className={`${styles.heroFormContainer}`}>
        <h2 className={styles.heroTitle}>Kontaktiere uns</h2>
        <p className={styles.heroText}>
          Bitte fülle das untenstehende Formular aus und wir werden uns in Kürze
          mit dir in Verbindung setzen
        </p>
        <HeroForm hideModal={sendModalForm} />
      </div>
    </div>
  );
};

export default HeroFormModal;

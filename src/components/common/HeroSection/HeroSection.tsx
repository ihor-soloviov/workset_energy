'use client';

import styles from './HeroSection.module.css';
import { inter } from '@/utils/fonts';
import Button from '../Button/Button';
import Link from 'next/link';
import ArrowIcon from '/public/icons/small-arrow-btn.svg';
import HeroFormModal from './HeroFormModal/HeroFormModal';
import { useEffect, useState } from 'react';

type HeroProps = {
  imgMob: string;
  imgDesc: string;
  title: string;
  text: string;
  className: string;
};

const HeroSection = ({
  imgMob,
  imgDesc,
  title,
  text,
  className,
}: HeroProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleModalClick = () => setIsModalOpen(!isModalOpen);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 1728);

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1728);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isModalOpen]);

  return (
    <>
      <section
        style={{ backgroundImage: `url(${isDesktop ? imgDesc : imgMob})` }}
        className={styles.heroSection}
      >
        <div className={styles.heroContainer}>
          <div className={styles.heroTextWrap}>
            <h2 className={`${styles.heroMainTitle} ${styles[className]}`}>
              {title}
            </h2>
            <p
              className={`${styles.heroMainText} ${styles[className]} ${inter.className}`}
            >
              {text}
            </p>
            <div className={styles.heroBtnWrap}>
              <Link className={styles.heroLink} href="/leadgen">
                Jetzt Berechnen
                <ArrowIcon className={styles.heroIcon} />
              </Link>
              <Button
                handleClick={() => !isDesktop && handleModalClick()}
                type="button"
                className={styles.heroBtn}
              >
                Zum Angebot
              </Button>
            </div>
          </div>
          {isDesktop && (
            <HeroFormModal
              isDesktop={isDesktop}
              handleModalClick={handleModalClick}
            />
          )}
        </div>
      </section>
      {isModalOpen && (
        <HeroFormModal
          isDesktop={isDesktop}
          handleModalClick={handleModalClick}
        />
      )}
    </>
  );
};

export default HeroSection;

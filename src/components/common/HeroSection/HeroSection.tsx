'use client';

import styles from './HeroSection.module.css';
import { inter } from '@/utils/fonts';
import Button from '../Button/Button';
import Link from 'next/link';
import ArrowIcon from '/public/icons/small-arrow-btn.svg';
import HeroForm from './HeroForm/HeroForm';
import { useEffect, useState } from 'react';

type HeroProps = {
  imgMob: string;
  imgDesc: string;
  title: string;
  text: string;
};

const HeroSection = ({ imgMob, imgDesc, title, text }: HeroProps) => {
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

  return (
    <>
      <section
        style={{ backgroundImage: `url(${isDesktop ? imgDesc : imgMob})` }}
        className={styles.heroSection}
      >
        <div className={styles.heroContainer}>
          <div className={styles.heroTextWrap}>
            <h2 className={styles.heroMainTitle}>{title}</h2>
            <p className={`${styles.heroMainText} ${inter.className}`}>
              {text}
            </p>
            <div className={styles.heroBtnWrap}>
              <Link className={styles.heroLink} href="/leadgen">
                Jetzt Berechnen
                <ArrowIcon className={styles.heroIcon} />
              </Link>
              <Button
                handleClick={handleModalClick}
                type="button"
                className={styles.heroBtn}
              >
                Zum Angebot
              </Button>
            </div>
          </div>
          {isDesktop && <HeroForm handleModalClick={handleModalClick} />}
        </div>
      </section>
      {isModalOpen && <HeroForm handleModalClick={handleModalClick} />}
    </>
  );
};

export default HeroSection;

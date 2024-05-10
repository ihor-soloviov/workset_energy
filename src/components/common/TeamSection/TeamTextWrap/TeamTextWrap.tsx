'use client';
import React from 'react';
import styles from '../TeamSection.module.css';
import { inter } from '@/utils/fonts';
import useObserver from '@/hooks/useObserver';
import Button from '../../Button/Button';
import ArrowIcon from '/public/icons/slide-arrow.svg';

type Props = {
  handleImage: (value: string) => void;
};

const TeamTextWrap: React.FC<Props> = ({ handleImage }) => {
  useObserver(`.${styles.teamTextWrap}`, `${styles.teamTextWrapVisible}`);

  return (
    <div className={styles.teamTextWrap}>
      <h2 className={styles.teamTitle}>
        Finde einen Experten in deiner Region!
      </h2>
      <p className={`${styles.teamText} ${inter.className}`}>
        Blättere durch unser Experten-Team und finde einen Experten aus deiner
        Region. Speichere dir seine Kontaktdaten und kontaktiere ihn, wann du
        willst. Oder kontaktiere ihn gleich jetzt!
      </p>
      <div>
        <div className={styles.carouselBtns}>
          <div className={styles.carouselBtns}>
            <Button
              handleClick={() => handleImage('prev')}
              type="button"
              className={styles.carouselBtn}
            >
              <ArrowIcon className={styles.prevArrow} />
            </Button>
            <Button
              handleClick={() => handleImage('next')}
              type="button"
              className={styles.carouselBtn}
            >
              <ArrowIcon className={styles.nextArrow} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamTextWrap;

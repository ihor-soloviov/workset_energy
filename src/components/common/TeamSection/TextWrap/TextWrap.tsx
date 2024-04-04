'use client';
import React from 'react';
import styles from '../TeamSection.module.css';
import { inter } from '@/utils/fonts';
import Button from '../../Button/Button';
import ArrowIcon from '/public/icons/small-arrow-btn.svg';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { opacityAnimation, textAnimationToRight } from '@/utils/animations';

const TextWrap = () => {
  return (
    <div className={styles.teamTextWrap}>
      <LazyMotion features={domAnimation}>
        <m.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0, once: true }}
          variants={textAnimationToRight}
          className={styles.teamTitle}
        >
          Unser Team
          <br className={styles.teamBr} /> von Experten
        </m.h2>
        <m.p
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0, once: true }}
          variants={textAnimationToRight}
          custom={1}
          className={`${styles.teamText} ${inter.className}`}
        >
          Werde Teil unseres Teams! Hinterlasse uns deine Daten und wir
          kontaktieren dich
        </m.p>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0, once: true }}
          variants={opacityAnimation}
          custom={3}
        >
          <Button className={styles.teamBtn} type="button">
            Zum Angebot
            <ArrowIcon className={styles.teamIcon} />
          </Button>
        </m.div>
      </LazyMotion>
    </div>
  );
};

export default TextWrap;

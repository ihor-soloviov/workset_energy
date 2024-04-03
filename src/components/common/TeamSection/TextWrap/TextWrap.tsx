'use client';
import React from 'react';
import styles from '../TeamSection.module.css';
import { inter } from '@/utils/fonts';
import Button from '../../Button/Button';
import ArrowIcon from '/public/icons/small-arrow-btn.svg';
import { motion } from 'framer-motion';
import { opacityAnimation, textAnimationToRight } from '@/utils/animations';

const TextWrap = () => {
  return (
    <div className={styles.teamTextWrap}>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0, once: true }}
        variants={textAnimationToRight}
        className={styles.teamTitle}
      >
        Unser Team
        <br className={styles.teamBr} /> von Experten
      </motion.h2>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0, once: true }}
        variants={textAnimationToRight}
        custom={1}
        className={`${styles.teamText} ${inter.className}`}
      >
        Werde Teil unseres Teams! Hinterlasse uns deine Daten und wir
        kontaktieren dich
      </motion.p>
      <motion.div
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
      </motion.div>
    </div>
  );
};

export default TextWrap;

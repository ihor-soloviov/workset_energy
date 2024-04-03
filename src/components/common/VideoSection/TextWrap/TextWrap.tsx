'use client';
import React from 'react';
import styles from '../VideoSection.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { fromBotAnimation } from '@/animations/animations';
import { inter } from '@/utils/fonts';

type Props = {
  title: string;
  text: string;
};

const TextWrap: React.FC<Props> = ({ title, text }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0 }}
        variants={fromBotAnimation}
        className={styles.videoTextWrap}
      >
        <h2 className={styles.videoTitle}>{title}</h2>
        <p className={`${styles.videoText} ${inter.className}`}>{text}</p>
      </motion.div>
    </AnimatePresence>
  );
};

export default TextWrap;

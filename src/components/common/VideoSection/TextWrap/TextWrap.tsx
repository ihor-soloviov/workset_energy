'use client';
import React from 'react';
import styles from '../VideoSection.module.css';
import { motion } from 'framer-motion';
import { fromBotAnimation } from '@/utils/animations';
import { inter } from '@/utils/fonts';

type Props = {
  title: string;
  text: string;
};

const TextWrap: React.FC<Props> = ({ title, text }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0, once: true }}
      variants={fromBotAnimation}
      className={styles.videoTextWrap}
    >
      <h2 className={styles.videoTitle}>{title}</h2>
      <p className={`${styles.videoText} ${inter.className}`}>{text}</p>
    </motion.div>
  );
};

export default TextWrap;

'use client';
import { motion } from 'framer-motion';
import { fromBotAnimation } from '@/animations/animations';
import React from 'react';

type Props = {
  title: string;
  titleClass: string;
  text?: string;
  textClass?: string;
};

const RecycleTextWrap: React.FC<Props> = ({
  title,
  titleClass,
  text,
  textClass,
}) => {
  return (
    <>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0 }}
        variants={fromBotAnimation}
        className={titleClass}
      >
        {title}
      </motion.h2>
      {text && (
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0 }}
          variants={fromBotAnimation}
          custom={0.4}
          className={textClass}
        >
          {text}
        </motion.p>
      )}
    </>
  );
};

export default RecycleTextWrap;

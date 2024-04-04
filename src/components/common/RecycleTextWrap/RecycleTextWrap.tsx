'use client';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { fromBotAnimation } from '@/utils/animations';
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
      <LazyMotion features={domAnimation}>
        <m.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0, once: true }}
          variants={fromBotAnimation}
          className={titleClass}
        >
          {title}
        </m.h2>
        {text && (
          <m.p
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0, once: true }}
            variants={fromBotAnimation}
            custom={0.4}
            className={textClass}
          >
            {text}
          </m.p>
        )}
      </LazyMotion>
    </>
  );
};

export default RecycleTextWrap;

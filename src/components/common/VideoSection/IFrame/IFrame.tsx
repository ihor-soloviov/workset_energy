'use client';
import React from 'react';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { fromBotAnimation } from '@/utils/animations';

type Props = {
  link: string;
  videoFrameClass: string;
};

const IFrame: React.FC<Props> = ({ link, videoFrameClass }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.iframe
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0, once: true }}
        variants={fromBotAnimation}
        src={link}
        className={videoFrameClass}
        allow="accelerometer"
        allowFullScreen
      />
    </LazyMotion>
  );
};

export default IFrame;

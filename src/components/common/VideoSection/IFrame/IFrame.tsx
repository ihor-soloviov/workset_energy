'use client';
import React from 'react';

type Props = {
  link: string;
  videoFrameClass: string;
};

const IFrame: React.FC<Props> = ({ link, videoFrameClass }) => {
  return (
    <iframe
      src={link}
      className={videoFrameClass}
      allow="accelerometer"
      allowFullScreen
    />
  );
};

export default IFrame;

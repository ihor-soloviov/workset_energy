'use client';

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
      <h2 className={titleClass}>{title}</h2>
      {text && <p className={textClass}>{text}</p>}
    </>
  );
};

export default RecycleTextWrap;

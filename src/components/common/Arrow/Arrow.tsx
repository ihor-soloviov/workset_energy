import ArrowIcon from '/public/icons/small-arrow-btn.svg';
import styles from './Arrow.module.css';
import React from 'react';

type Props = {
  className: string;
};

const Arrow: React.FC<Props> = ({ className }) => {
  return (
    <div className={styles.gtmArrowInner}>
      <ArrowIcon className={`${className}`} />
    </div>
  );
};

export default Arrow;

import styles from './Arrow.module.css';
import React from 'react';

type Props = {
  className: string;
};

const Arrow: React.FC<Props> = ({ className }) => {
  return (
    <div className={styles.gtmArrowInner}>
      {/* <ArrowIcon /> */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
      >
        <path
          className="gtmArrowSvgPath"
          d="M5 11H17.8333"
          stroke=""
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className="gtmArrowSvgPath"
          d="M11.4167 4L17.8334 11L11.4167 18"
          stroke=""
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default Arrow;

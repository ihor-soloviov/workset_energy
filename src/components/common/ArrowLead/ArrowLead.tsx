import React from 'react';
import styles from './ArrowLead.module.css';

type Props = {
  className: string;
};

const ArrowLead: React.FC<Props> = ({ className }) => {
  return (
    <div className={styles.gtmArrowInnerLead}>
      <svg
        className={`${className}`}
        xmlns="http://www.w3.org/2000/svg"
        width=""
        height=""
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          className="gtmArrowSvgPath"
          d="M8.3335 5L12.7442 9.41074C13.0697 9.73618 13.0697 10.2638 12.7442 10.5893L8.3335 15"
          stroke=""
          strokeWidth="1.67"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default ArrowLead;

import React from 'react';
import styles from './ArrowLead.module.css';
import LeadIcon from '/public/icons/lead-btn-arrow.svg';
type Props = {
  className: string;
};

const ArrowLead: React.FC<Props> = ({ className }) => {
  return (
    <div className={styles.gtmArrowInnerLead}>
      <LeadIcon className={`${styles.leadIcon} ${className}`} />
    </div>
  );
};

export default ArrowLead;

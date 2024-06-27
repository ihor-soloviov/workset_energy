import React from 'react';
import dynamic from 'next/dynamic';

const LeadgenComponent = dynamic(
  () => import('./LeadgenComponent/LeadgenComponent'),
);

import styles from './LeadgenSection.module.css';

const LeadgenSection = () => {
  return (
    <section id="leadgen" className={`${styles.leadSection}`}>
      <div className={styles.leadContainer}>
        <LeadgenComponent />
      </div>
    </section>
  );
};

export default LeadgenSection;

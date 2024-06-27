import React from 'react';
import dynamic from 'next/dynamic';
import LeadTitleIcon from '/public/icons/leadgen/title-arrow.svg';
const LeadgenComponent = dynamic(
  () => import('./LeadgenComponent/LeadgenComponent'),
);

import styles from './LeadgenSection.module.css';

const LeadgenSection = () => {
  return (
    <section id="leadgen" className={`${styles.leadSection}`}>
      <div className={styles.leadContainer}>
        <h2 className={styles.leadMainTitle}>Jetzt Solaranlage berechnen</h2>
        <LeadTitleIcon className={styles.leadTitleIcon} />
        <LeadgenComponent />
      </div>
    </section>
  );
};

export default LeadgenSection;

import React from 'react';
import styles from './LeadgenSection.module.css';
import LeadgenComponent from './LeadgenComponent/LeadgenComponent';

const LeadgenSection = () => {
  return (
    <section className={styles.leadSection}>
      <div className={styles.leadContainer}>
        <h2 className={styles.leadTitle}>
          Investiere 30 Sekunden für dein PV-Projekt!
        </h2>
        <LeadgenComponent />
      </div>
    </section>
  );
};

export default LeadgenSection;

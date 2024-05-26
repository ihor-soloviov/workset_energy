import React from 'react';
import styles from './LeadgenSection.module.css';
import LeadgenComponent from './LeadgenComponent/LeadgenComponent';

const LeadgenSection = () => {
  return (
    <section className={styles.leadSection}>
      <div className={styles.leadContainer}>
        <h2 className={styles.leadTitle}>
          Test in 30 Sekunden -deine PV-Anlage wartet!
        </h2>
      </div>
      <LeadgenComponent />
    </section>
  );
};

export default LeadgenSection;

'use client';

import React, { useState } from 'react';
import styles from './LeadgenSection.module.css';
import LeadgenComponent from './LeadgenComponent/LeadgenComponent';
import { useGlobalStore } from '@/store/global-store';

const LeadgenSection = () => {
  const [step, setStep] = useState(1);
  const { isDesktop } = useGlobalStore();

  const getCurrentClass = () => {
    switch (step) {
      case 1:
        return 'extraSmall';
      case 2:
        return 'small';
      case 3:
        return 'small';
      case 4:
        return !isDesktop ? 'medium' : 'extraMedium';
      case 5:
        return 'large';
      case 6:
        return 'medium';
      case 7:
        return 'large';

      default:
        return '';
    }
  };

  return (
    <section
      id="leadgen"
      className={`${styles.leadSection} ${styles[getCurrentClass()]}`}
    >
      <div className={styles.leadContainer}>
        {step < 6 && (
          <h2 className={styles.leadTitle}>
            Investiere 30 Sekunden für dein PV-Projekt!
          </h2>
        )}
        <LeadgenComponent step={step} setStep={setStep} />
      </div>
    </section>
  );
};

export default LeadgenSection;

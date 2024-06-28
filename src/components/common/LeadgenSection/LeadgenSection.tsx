'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import LeadTitleIcon from '/public/icons/leadgen/title-arrow.svg';
const LeadgenComponent = dynamic(
  () => import('./LeadgenComponent/LeadgenComponent'),
);

import styles from './LeadgenSection.module.css';

const LeadgenSection = () => {
  const [step, setStep] = useState(1);
  return (
    <section id="leadgen" className={`${styles.leadSection}`}>
      <div className={styles.leadContainer}>
        {step < 4 && (
          <>
            <h2 className={styles.leadMainTitle}>
              Jetzt Solaranlage berechnen
            </h2>
            <LeadTitleIcon className={styles.leadTitleIcon} />
          </>
        )}

        <LeadgenComponent step={step} setStep={setStep} />
      </div>
    </section>
  );
};

export default LeadgenSection;

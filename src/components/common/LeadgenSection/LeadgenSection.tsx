'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const LeadgenComponent = dynamic(
  () => import('./LeadgenComponent/LeadgenComponent'),
);

import { useGlobalStore } from '@/store/global-store';
import styles from './LeadgenSection.module.css';

const LeadgenSection = () => {
  const [step, setStep] = useState(1);
  const { isDesktop } = useGlobalStore();

  const getCurrentClass = () => {
    return;
  };

  return (
    <section id="leadgen" className={`${styles.leadSection}`}>
      <div className={styles.leadContainer}>
        <LeadgenComponent step={step} setStep={setStep} />
      </div>
    </section>
  );
};

export default LeadgenSection;

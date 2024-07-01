'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import LeadTitleIcon from '/public/icons/leadgen/title-arrow.svg';
import dynamic from 'next/dynamic';
const LeadgenComponent = dynamic(
  () => import('./LeadgenComponent/LeadgenComponent'),
);
import styles from './LeadgenSection.module.css';

const LeadgenSection = () => {
  const [step, setStep] = useState(1);
  const pathname = usePathname();
  return (
    <section
      id="leadgen"
      className={`${styles.leadSection} ${pathname === '/leadgen' && step === 4 ? styles.extraClass : ''}`}
    >
      <div className={styles.leadContainer}>
        {pathname === '/' && step < 4 && (
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

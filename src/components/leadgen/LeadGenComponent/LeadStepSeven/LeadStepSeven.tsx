import { inter } from '@/utils/fonts';

import React from 'react';
import styles from './LeadStepSeven.module.css';
import { LeadStepProps } from '../types';
import LeadStepSevenForm from './LeadStepSevenForm/LeadStepSevenForm';

const LeadStepSeven = ({
  formData,
  setFormData,
  step,
  setStep,
}: LeadStepProps) => {
  return (
    <div className={styles.stepSevenMainWrap}>
      <h3 className={styles.stepSevenMainTitle}>Glückwunsh!</h3>
      <p className={`${styles.stepSevenText} ${inter.className}`}>
        Gerne erstellen wir eine kostenlose Wirtschaftlichkeitsanalyse für dein
        PV-Projekt!
      </p>
      <p className={`${styles.stepSevenTextDesc} ${inter.className}`}>
        Wir künen dir eine kostenfreie Wirtschaftlichkeitsanalyse für dich
        PV-Projekt erstellen!
      </p>
      <LeadStepSevenForm
        formData={formData}
        setFormData={setFormData}
        step={step}
        setStep={setStep}
      />
    </div>
  );
};

export default LeadStepSeven;

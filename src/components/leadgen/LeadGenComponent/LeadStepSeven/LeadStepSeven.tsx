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
      <h3 className={styles.stepSevenMainTitle}>Glückwunsch!</h3>
      <p className={`${styles.stepSevenText} ${inter.className}`}>
        Du hast es fast geschafft und unser Team erstellt dir eine
        Wirtschaftlichkeitsanalyse für dein PV-Projekt!
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

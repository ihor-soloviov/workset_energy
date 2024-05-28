import styles from './LeadStepSeven.module.css';
import LeadStepSevenForm from './LeadStepSevenForm/LeadStepSevenForm';
import React from 'react';
import { LeadFormProps } from '../../types';

const LeadStepSeven = ({
  formData,
  setFormData,
  step,
  setStep,
  handlePrevStepClick,
}: LeadFormProps) => {
  return (
    <div className={styles.stepSevenWrap}>
      <h2 className={styles.stepSevenTitle}>Kontaktdaten</h2>
      <h2 className={styles.stepSevenText}>
        Bitte alle Felder ausfüllen, damit wir dich erreichen können.
      </h2>
      <LeadStepSevenForm
        formData={formData}
        setFormData={setFormData}
        step={step}
        setStep={setStep}
        handlePrevStepClick={handlePrevStepClick}
      />
    </div>
  );
};

export default LeadStepSeven;

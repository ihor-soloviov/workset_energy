import styles from './LeadStepFive.module.css';
import LeadStepFiveForm from './LeadStepFiveForm/LeadStepFiveForm';
import React from 'react';
import { LeadFormProps } from '../../types';

const LeadStepFive = ({
  formData,
  setFormData,
  step,
  setStep,
  handlePrevStepClick,
}: LeadFormProps) => {
  return (
    <div className={styles.stepFiveWrap}>
      <h2 className={styles.stepFiveTitle}>Kontaktdaten</h2>
      <h2 className={styles.stepFiveText}>
        Bitte alle Felder ausfüllen, damit wir dich erreichen können.
      </h2>
      <LeadStepFiveForm
        formData={formData}
        setFormData={setFormData}
        step={step}
        setStep={setStep}
        handlePrevStepClick={handlePrevStepClick}
      />
    </div>
  );
};

export default LeadStepFive;

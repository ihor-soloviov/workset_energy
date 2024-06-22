import styles from './LeadStepThree.module.css';
import LeadStepThreeForm from './LeadStepThreeForm/LeadStepThreeForm';
import React from 'react';
import { LeadFormProps } from '../../types';

const LeadStepThree = ({
  formData,
  setFormData,
  step,
  setStep,
  handlePrevStepClick,
}: LeadFormProps) => {
  return (
    <div className={styles.stepThreeWrap}>
      <h2 className={styles.stepThreeTitle}>Kontaktdaten</h2>
      <h2 className={styles.stepThreeText}>
        Bitte alle Felder ausfüllen, damit wir dich erreichen können.
      </h2>
      <LeadStepThreeForm
        formData={formData}
        setFormData={setFormData}
        step={step}
        setStep={setStep}
        handlePrevStepClick={handlePrevStepClick}
      />
    </div>
  );
};

export default LeadStepThree;

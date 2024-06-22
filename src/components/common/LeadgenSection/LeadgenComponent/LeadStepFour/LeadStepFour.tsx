import styles from './LeadStepFour.module.css';
import LeadStepFourForm from './LeadStepFourForm/LeadStepFourForm';
import React from 'react';
import { LeadFormProps } from '../../types';

const LeadStepFour = ({
  formData,
  setFormData,
  step,
  setStep,
  handlePrevStepClick,
}: LeadFormProps) => {
  return (
    <div className={styles.stepThreeWrap}>
      <h2 className={styles.stepThreeTitle}>WorkSET Energy sagt Danke!</h2>
      <p className={styles.stepThreeText}>
        Wir haben deine Anfrage erhalten. Schreibe uns eine Nachricht, damit wir
        deine Anfrage schneller bearbeiten können.
      </p>
      <LeadStepFourForm
        formData={formData}
        setFormData={setFormData}
        step={step}
        setStep={setStep}
        handlePrevStepClick={handlePrevStepClick}
      />
    </div>
  );
};

export default LeadStepFour;

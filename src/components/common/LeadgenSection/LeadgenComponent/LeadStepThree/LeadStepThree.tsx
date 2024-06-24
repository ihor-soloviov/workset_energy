import styles from './LeadStepThree.module.css';
import LeadStepThreeForm from './LeadStepThreeForm/LeadStepThreeForm';
import React, { useState } from 'react';
import { LeadFormProps } from '../../types';
import { inter } from '@/utils/fonts';

const LeadStepThree = ({
  formData,
  setFormData,
  step,
  setStep,
  handlePrevStepClick,
  setUserToken,
}: LeadFormProps) => {
  return (
    <div className={styles.stepThreeWrap}>
      <h2 className={styles.stepThreeTitle}>Kontaktdaten</h2>
      <p className={`${styles.stepThreeText} ${inter.className}`}>
        Bitte alle Felder ausfüllen, damit wir dich erreichen können.
      </p>
      <LeadStepThreeForm
        formData={formData}
        setFormData={setFormData}
        step={step}
        setStep={setStep}
        handlePrevStepClick={handlePrevStepClick}
        setUserToken={setUserToken}
      />
    </div>
  );
};

export default LeadStepThree;

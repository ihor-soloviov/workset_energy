import Button from '@/components/common/Button/Button';
import styles from './LeadStepSix.module.css';
import LeadStepSixForm from './LeadStepSixForm/LeadStepSixForm';
import React, { useState, MouseEvent } from 'react';
import { LeadFormProps } from '../../types';

const LeadStepSix = ({
  formData,
  setFormData,
  step,
  setStep,
  handlePrevStepClick,
}: LeadFormProps) => {
  return (
    <div className={styles.stepSixWrap}>
      <h2 className={styles.stepSixTitle}>Kontaktdaten</h2>
      <h2 className={styles.stepSixText}>
        Bitte alle Felder ausfüllen, damit wir dich erreichen können.
      </h2>
      <LeadStepSixForm
        formData={formData}
        setFormData={setFormData}
        step={step}
        setStep={setStep}
        handlePrevStepClick={handlePrevStepClick}
      />
    </div>
  );
};

export default LeadStepSix;

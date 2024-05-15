import { inter } from '@/utils/fonts';
import React from 'react';
import styles from './LeadStepSix.module.css';
import { LeadStepProps } from '../types';
import LeadStepSixForm from './LeadStepSixForm/LeadStepSixForm';
const LeadStepSix = ({
  formData,
  setFormData,
  step,
  setStep,
}: LeadStepProps) => {
  return (
    <div className={styles.stepSixMainWrap}>
      <h3 className={styles.stepSixMainTitle}>
        Wo ist dein PV-Projekt geplant?
      </h3>
      <p className={`${styles.stepSixText} ${inter.className}`}>
        Gebe bitte die Adresse an, an der die PV-Anlage installiert werden soll.
      </p>
      <LeadStepSixForm
        setFormData={setFormData}
        formData={formData}
        setStep={setStep}
        step={step}
      />
    </div>
  );
};

export default LeadStepSix;

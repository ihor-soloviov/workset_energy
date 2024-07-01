import styles from './LeadStepFour.module.css';
import LeadStepFourForm from './LeadStepFourForm/LeadStepFourForm';
import React from 'react';
import { LeadFormProps } from '../../types';
import { inter } from '@/utils/fonts';
import useHashObserver from '@/hooks/useHashObserver';

const LeadStepFour = ({
  formData,
  setFormData,
  step,
  setStep,
  leadId,
  leadMainWrapRef,
}: LeadFormProps) => {
  useHashObserver('optionalstep');
  return (
    <div id="optionalstep" className={styles.stepFourWrap}>
      <h2 className={styles.stepFourTitle}>WorkSET Energy sagt Danke!</h2>
      <p className={`${styles.stepFourText} ${inter.className}`}>
        Wir haben deine Anfrage erhalten. Schreibe uns eine Nachricht, damit wir
        deine Anfrage schneller bearbeiten können.
      </p>
      <LeadStepFourForm
        formData={formData}
        setFormData={setFormData}
        step={step}
        setStep={setStep}
        leadId={leadId}
        leadMainWrapRef={leadMainWrapRef}
      />
    </div>
  );
};

export default LeadStepFour;

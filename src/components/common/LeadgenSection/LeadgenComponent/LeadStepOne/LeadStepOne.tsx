import Button from '@/components/common/Button/Button';
import styles from './LeadStepOne.module.css';
import LeadStepOneList from './LeadSteOneList/LeadStepOneList';
import { LeadStepProps } from '../../types';
import React, { useState, MouseEvent, useEffect } from 'react';
import { inter } from '@/utils/fonts';

const LeadStepOne = ({ handleNextStepClick }: LeadStepProps) => {
  const [stepOneValue, setStepOneValue] = useState<null | string>(null);

  const handleItemClick = (e: MouseEvent<HTMLLIElement>, itemValue: string) => {
    setStepOneValue(itemValue);
  };

  useEffect(() => {
    if (stepOneValue) {
      const timer = setTimeout(() => {
        handleNextStepClick(stepOneValue, 'kWp');
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [stepOneValue, handleNextStepClick]);

  return (
    <div className={styles.stepOneWrap}>
      <h2 className={styles.stepOneTitle}>Welche Kapazität benötigen Sie?</h2>
      <p className={`${styles.stepOneText} ${inter.className}`}>
        Wählen Sie eine richtige Antwort aus den folgenden Optionen.
      </p>

      <LeadStepOneList
        stepValue={stepOneValue}
        handleItemClick={handleItemClick}
      />
    </div>
  );
};

export default LeadStepOne;

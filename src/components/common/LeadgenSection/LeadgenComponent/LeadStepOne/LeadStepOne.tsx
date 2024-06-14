import React, { useState, MouseEvent, useEffect } from 'react';
import LeadStepOneList from './LeadStepOneList/LeadStepOneList';
import { LeadStepProps } from '../../types';
import styles from './LeadStepOne.module.css';

const LeadStepOne = ({ handleNextStepClick }: LeadStepProps) => {
  const [stepOneValue, setStepOneValue] = useState<null | string>(null);

  const handleItemClick = (e: MouseEvent<HTMLLIElement>, itemValue: string) => {
    setStepOneValue(itemValue);
  };

  useEffect(() => {
    if (stepOneValue) {
      const timer = setTimeout(() => {
        handleNextStepClick(stepOneValue, 'propertyType');
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [stepOneValue, handleNextStepClick]);

  return (
    <div className={styles.stepOneWrap}>
      <h2 className={styles.stepOneTitle}>
        {`Bist du Eigentümer(-in) der Immobilie,`}
      </h2>
      <p className={styles.stepOneText}>für die du die PV-Anlage planst?</p>
      <LeadStepOneList
        stepValue={stepOneValue}
        handleItemClick={handleItemClick}
      />
    </div>
  );
};

export default LeadStepOne;

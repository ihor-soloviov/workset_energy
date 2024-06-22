import Button from '@/components/common/Button/Button';
import styles from './LeadStepOne.module.css';
import LeadStepOneList from './LeadSteOneList/LeadStepOneList';
import { LeadStepProps } from '../../types';
import React, { useState, MouseEvent, useEffect } from 'react';

const LeadStepOne = ({
  handleNextStepClick,
  handlePrevStepClick,
}: LeadStepProps) => {
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

      <LeadStepOneList
        stepValue={stepOneValue}
        handleItemClick={handleItemClick}
      />

      <Button
        handleClick={handlePrevStepClick}
        type="button"
        className={styles.stepOneBtn}
      >
        Zurück
      </Button>
    </div>
  );
};

export default LeadStepOne;

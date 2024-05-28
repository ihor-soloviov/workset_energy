import Button from '@/components/common/Button/Button';
import styles from './LeadStepFive.module.css';
import LeadStepFiveList from './LeadStepFiveList/LeadStepFiveList';
import React, { useState, MouseEvent, useEffect } from 'react';
import { LeadStepProps } from '../../types';

const LeadStepFive = ({
  handleNextStepClick,
  handlePrevStepClick,
}: LeadStepProps) => {
  const [stepFiveValue, setStepFiveValue] = useState<null | string>(null);

  const handleItemClick = (e: MouseEvent<HTMLLIElement>, itemValue: string) => {
    setStepFiveValue(itemValue);
  };

  useEffect(() => {
    if (stepFiveValue) {
      const timer = setTimeout(() => {
        handleNextStepClick(stepFiveValue, 'kwpType');
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [stepFiveValue, handleNextStepClick]);

  return (
    <div className={styles.stepFiveWrap}>
      <h2 className={styles.stepFiveTitle}>
        Wie groß planst du deine PV-Anlage?
      </h2>
      <LeadStepFiveList
        stepValue={stepFiveValue}
        handleItemClick={handleItemClick}
      />

      <Button
        handleClick={handlePrevStepClick}
        type="button"
        className={styles.stepFiveBtn}
      >
        Züruck
      </Button>
    </div>
  );
};

export default LeadStepFive;

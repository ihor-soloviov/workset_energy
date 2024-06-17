import Button from '@/components/common/Button/Button';
import styles from './LeadStepFour.module.css';
import LeadStepFourList from './LeadStepFourList/LeadStepFourList';
import React, { useState, MouseEvent, useEffect } from 'react';
import { LeadStepProps } from '../../types';

const LeadStepFour = ({
  handleNextStepClick,
  handlePrevStepClick,
}: LeadStepProps) => {
  const [stepFourValue, setStepFourValue] = useState<null | string>(null);

  const handleItemClick = (e: MouseEvent<HTMLLIElement>, itemValue: string) => {
    setStepFourValue(itemValue);
  };

  useEffect(() => {
    if (stepFourValue) {
      const timer = setTimeout(() => {
        handleNextStepClick(stepFourValue, 'communicationType');
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [stepFourValue, handleNextStepClick]);

  return (
    <div className={styles.stepFourWrap}>
      <h2 className={styles.stepFourTitle}>
        Wann bist du am besten erreichbar?
      </h2>
      <LeadStepFourList
        stepValue={stepFourValue}
        handleItemClick={handleItemClick}
      />

      <Button
        handleClick={handlePrevStepClick}
        type="button"
        className={styles.stepFourBtn}
      >
        Zurück
      </Button>
    </div>
  );
};

export default LeadStepFour;

import Button from '@/components/common/Button/Button';
import styles from './LeadStepThree.module.css';
import LeadStepThreeList from './LeadStepThreeList/LeadStepThreeList';
import React, { useState, MouseEvent, useEffect } from 'react';
import { LeadStepProps } from '../../types';

const LeadStepThree = ({
  handleNextStepClick,
  handlePrevStepClick,
}: LeadStepProps) => {
  const [stepThreeValue, setStepThreeValue] = useState<null | string>(null);

  const handleItemClick = (e: MouseEvent<HTMLLIElement>, itemValue: string) => {
    setStepThreeValue(itemValue);
  };

  useEffect(() => {
    if (stepThreeValue) {
      const timer = setTimeout(() => {
        handleNextStepClick(`${stepThreeValue} monate`, 'timePeriod');
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [stepThreeValue, handleNextStepClick]);

  return (
    <div className={styles.stepThreeWrap}>
      <h2 className={styles.stepThreeTitle}>Umsetzung</h2>
      <p className={styles.stepThreeText}>
        Wann wünschst du deine PV-Anlage zu realisieren?
      </p>
      <LeadStepThreeList
        stepValue={stepThreeValue}
        handleItemClick={handleItemClick}
      />

      <Button
        handleClick={handlePrevStepClick}
        type="button"
        className={styles.stepThreeBtn}
      >
        Zurück
      </Button>
    </div>
  );
};

export default LeadStepThree;

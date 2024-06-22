import Button from '@/components/common/Button/Button';
import styles from './LeadStepTwo.module.css';
import LeadStepTwoList from './LeadStepTwoList/LeadStepTwoList';
import React, { useState, MouseEvent, useEffect } from 'react';
import { LeadStepProps } from '../../types';

const LeadStepTwo = ({
  handleNextStepClick,
  handlePrevStepClick,
}: LeadStepProps) => {
  const [stepTwoValue, setstepTwoValue] = useState<null | string>(null);

  const handleItemClick = (e: MouseEvent<HTMLLIElement>, itemValue: string) => {
    setstepTwoValue(itemValue);
  };

  useEffect(() => {
    if (stepTwoValue) {
      const timer = setTimeout(() => {
        handleNextStepClick(stepTwoValue, 'componentsList');
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [stepTwoValue, handleNextStepClick]);

  return (
    <div className={styles.stepTwoWrap}>
      <h2 className={styles.stepTwoTitle}>Welche Komponenten benötigen Sie?</h2>

      <LeadStepTwoList
        stepValue={stepTwoValue}
        handleItemClick={handleItemClick}
      />

      <Button
        handleClick={handlePrevStepClick}
        type="button"
        className={styles.stepTwoBtn}
      >
        Zurück
      </Button>
    </div>
  );
};

export default LeadStepTwo;

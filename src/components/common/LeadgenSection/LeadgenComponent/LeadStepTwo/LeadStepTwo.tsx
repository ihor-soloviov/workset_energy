import Button from '@/components/common/Button/Button';
import styles from './LeadStepTwo.module.css';
import LeadStepTwoList from './LeadStepTwoList/LeadStepTwoList';
import { LeadStepProps } from '../../types';
import React, { useState, MouseEvent, useEffect } from 'react';

const LeadStepTwo = ({
  handleNextStepClick,
  handlePrevStepClick,
}: LeadStepProps) => {
  const [stepTwoValue, setStepTwoValue] = useState<null | string>(null);

  const handleItemClick = (e: MouseEvent<HTMLLIElement>, itemValue: string) => {
    setStepTwoValue(itemValue);
  };

  useEffect(() => {
    if (stepTwoValue) {
      const timer = setTimeout(() => {
        handleNextStepClick(stepTwoValue, 'consultType');
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [stepTwoValue, handleNextStepClick]);

  return (
    <div className={styles.stepTwoWrap}>
      <h2 className={styles.stepTwoTitle}>
        Welche Art der Beratung wünschst du?
      </h2>
      <p className={styles.stepTwoText}>Wir wollen dich passgenau beraten!</p>
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

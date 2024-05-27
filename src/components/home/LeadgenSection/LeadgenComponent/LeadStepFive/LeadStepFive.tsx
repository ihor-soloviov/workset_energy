import Button from '@/components/common/Button/Button';
import styles from './LeadStepFive.module.css';
import LeadStepFiveList from './LeadStepFiveList/LeadStepFiveList';
import React, { useState, MouseEvent } from 'react';
import { LeadStepProps } from '../../types';

const LeadStepFive = ({
  handleNextStepClick,
  handlePrevStepClick,
}: LeadStepProps) => {
  const [stepFiveValue, setStepFiveValue] = useState<null | string>(null);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleItemClick = (e: MouseEvent<HTMLLIElement>, itemValue: string) => {
    setStepFiveValue(itemValue);
    setIsDisabled(false);
  };
  return (
    <div className={styles.stepFiveWrap}>
      <h2 className={styles.stepFiveTitle}>
        Wie groß planst du deine PV-Anlage?
      </h2>
      <LeadStepFiveList
        stepValue={stepFiveValue}
        handleItemClick={handleItemClick}
      />
      <div className={styles.stepFiveBtnWrap}>
        <Button
          handleClick={handlePrevStepClick}
          type="button"
          className={styles.stepFiveBtn}
        >
          Züruck
        </Button>
        <Button
          disabled={isDisabled}
          handleClick={() =>
            handleNextStepClick && handleNextStepClick(stepFiveValue, 'kwpType')
          }
          type="button"
          className={styles.stepFiveBtn}
        >
          Weiter
        </Button>
      </div>
    </div>
  );
};

export default LeadStepFive;

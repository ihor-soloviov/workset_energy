import Button from '@/components/common/Button/Button';
import styles from './LeadStepFour.module.css';
import LeadStepFourList from './LeadStepFourList/LeadStepFourList';
import React, { useState, MouseEvent } from 'react';
import { LeadStepProps } from '../../types';

const LeadStepFour = ({
  handleNextStepClick,
  handlePrevStepClick,
}: LeadStepProps) => {
  const [stepFourValue, setStepFourValue] = useState<null | string>(null);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleItemClick = (e: MouseEvent<HTMLLIElement>, itemValue: string) => {
    setStepFourValue(itemValue);
    setIsDisabled(false);
  };

  return (
    <div className={styles.stepFourWrap}>
      <h2 className={styles.stepFourTitle}>
        Wann bist du am besten erreichbar?
      </h2>
      <LeadStepFourList
        stepValue={stepFourValue}
        handleItemClick={handleItemClick}
      />
      <div className={styles.stepFourBtnWrap}>
        <Button
          handleClick={handlePrevStepClick}
          type="button"
          className={styles.stepFourBtn}
        >
          Züruck
        </Button>
        <Button
          disabled={isDisabled}
          handleClick={() =>
            handleNextStepClick &&
            handleNextStepClick(stepFourValue, 'communicationType')
          }
          type="button"
          className={styles.stepFourBtn}
        >
          Weiter
        </Button>
      </div>
    </div>
  );
};

export default LeadStepFour;

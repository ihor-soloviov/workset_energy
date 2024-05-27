import Button from '@/components/common/Button/Button';
import styles from './LeadStepThree.module.css';
import LeadStepThreeList from './LeadStepThreeList/LeadStepThreeList';
import React, { useState, MouseEvent } from 'react';
import { LeadStepProps } from '../../types';

const LeadStepThree = ({
  handleNextStepClick,
  handlePrevStepClick,
}: LeadStepProps) => {
  const [stepThreeValue, setStepThreeValue] = useState<null | string>(null);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleItemClick = (e: MouseEvent<HTMLLIElement>, itemValue: string) => {
    setStepThreeValue(itemValue);
    setIsDisabled(false);
  };

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
      <div className={styles.stepThreeBtnWrap}>
        <Button
          handleClick={handlePrevStepClick}
          type="button"
          className={styles.stepThreeBtn}
        >
          Züruck
        </Button>
        <Button
          disabled={isDisabled}
          handleClick={() =>
            handleNextStepClick &&
            handleNextStepClick(`${stepThreeValue} monate`, 'timePeriod')
          }
          type="button"
          className={styles.stepThreeBtn}
        >
          Weiter
        </Button>
      </div>
    </div>
  );
};

export default LeadStepThree;

import Button from '@/components/common/Button/Button';
import styles from './LeadStepTwo.module.css';
import LeadStepTwoList from './LeadStepTwoList/LeadStepTwoList';
import React, { useState, MouseEvent, useEffect } from 'react';
import { LeadStepProps } from '../../types';

const LeadStepTwo = ({
  handleNextStepClick,
  handlePrevStepClick,
}: LeadStepProps) => {
  const [stepTwoValues, setStepTwoValues] = useState<string[]>([]);
  const [isDisabled, setIsDisabled] = useState(true);

  console.log(stepTwoValues);

  const handleItemClick = (e: MouseEvent<HTMLLIElement>, itemValue: string) => {
    setStepTwoValues(prevValues =>
      prevValues.includes(itemValue)
        ? prevValues.filter(value => value !== itemValue)
        : [...prevValues, itemValue],
    );
  };

  useEffect(() => {
    stepTwoValues.length !== 0 ? setIsDisabled(false) : setIsDisabled(true);
  }, [stepTwoValues]);

  return (
    <div className={styles.stepTwoWrap}>
      <h2 className={styles.stepTwoTitle}>Welche Komponenten benötigen Sie?</h2>

      <LeadStepTwoList
        stepValue={stepTwoValues}
        handleItemClick={handleItemClick}
      />

      <div className={styles.stepTwoBtnWrap}>
        <Button
          handleClick={handlePrevStepClick}
          type="button"
          className={styles.stepTwoBtn}
        >
          Zurück
        </Button>
        <Button
          handleClick={() =>
            handleNextStepClick(stepTwoValues, 'componentsList')
          }
          disabled={isDisabled}
          type="button"
          className={styles.stepTwoBtn}
        >
          Weiter
        </Button>
      </div>
    </div>
  );
};

export default LeadStepTwo;

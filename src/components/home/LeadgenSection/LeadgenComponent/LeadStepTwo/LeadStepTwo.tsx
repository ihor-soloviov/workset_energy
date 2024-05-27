import Button from '@/components/common/Button/Button';
import styles from './LeadStepTwo.module.css';
import LeadStepTwoList from './LeadStepTwoList/LeadStepTwoList';
import { LeadStepProps } from '../../types';
import React, { useState, MouseEvent } from 'react';

const LeadStepTwo = ({
  handleNextStepClick,
  handlePrevStepClick,
}: LeadStepProps) => {
  const [stepTwoValue, setStepTwoValue] = useState<null | string>(null);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleItemClick = (e: MouseEvent<HTMLLIElement>, itemValue: string) => {
    setStepTwoValue(itemValue);
    setIsDisabled(false);
  };

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
      <div className={styles.stepTwoBtnWrap}>
        <Button
          handleClick={handlePrevStepClick}
          type="button"
          className={styles.stepTwoBtn}
        >
          Züruck
        </Button>
        <Button
          disabled={isDisabled}
          handleClick={() =>
            handleNextStepClick &&
            handleNextStepClick(stepTwoValue, 'consultType')
          }
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

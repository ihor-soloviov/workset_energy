import React, { useState, MouseEvent } from 'react';
import styles from './LeadStepFour.module.css';

import { LeadStepProps } from '../types';
import LeadIcon from '/public/icons/lead-btn-arrow.svg';
import Button from '@/components/common/Button/Button';
import LeadStepFourList from './LeadStepFourList/LeadStepFourList';

const LeadStepFour = ({
  formData,
  setFormData,
  step,
  setStep,
}: LeadStepProps) => {
  const [stepFourValue, setStepFourValue] = useState<null | string>(null);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleNextStepClick = () => {
    stepFourValue && setFormData({ ...formData, stepFour: stepFourValue });
    setStep(step + 1);
  };
  const handleItemClick = (e: MouseEvent<HTMLLIElement>, itemValue: string) => {
    setStepFourValue(itemValue);
    setIsDisabled(false);
  };

  return (
    <div className={styles.stepFourMainWrap}>
      <h3 className={styles.stepFourMainTitle}>
        Um welche Dachform handelt es sich?
      </h3>

      <LeadStepFourList
        stepFourValue={stepFourValue}
        handleItemClick={handleItemClick}
      />
      <Button
        disabled={isDisabled}
        className={styles.leadStepFourBtn}
        type="button"
        handleClick={handleNextStepClick}
      >
        Weiter
      </Button>
      <Button
        disabled={isDisabled}
        className={styles.leadStepFourBtnDesc}
        type="button"
        handleClick={handleNextStepClick}
      >
        Weiter
        <LeadIcon className={styles.leadIcon} />
      </Button>
    </div>
  );
};

export default LeadStepFour;

import React, { useState, MouseEvent } from 'react';
import styles from './LeadStepThree.module.css';

import { LeadStepProps } from '../types';
import Button from '@/components/common/Button/Button';
import LeadIcon from '/public/icons/lead-btn-arrow.svg';
import LeadStepThreeList from './LeadStepThreeList/LeadStepThreeList';

const LeadStepThree = ({
  formData,
  setFormData,
  step,
  setStep,
}: LeadStepProps) => {
  const [stepThreeValue, setStepThreeValue] = useState<null | string>(null);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleNextStepClick = () => {
    stepThreeValue && setFormData({ ...formData, stepThree: stepThreeValue });
    setStep(step + 1);
  };
  const handleItemClick = (e: MouseEvent<HTMLLIElement>, itemValue: string) => {
    setStepThreeValue(itemValue);
    setIsDisabled(false);
  };

  return (
    <div className={styles.stepThreeMainWrap}>
      <h3 className={styles.stepThreeMainTitle}>
        Wann wurde dein Dach gebaut/saniert?
      </h3>
      <LeadStepThreeList
        stepThreeValue={stepThreeValue}
        handleItemClick={handleItemClick}
      />
      <Button
        disabled={isDisabled}
        className={styles.leadStepThreeBtn}
        type="button"
        handleClick={handleNextStepClick}
      >
        Weiter
      </Button>

      <Button
        disabled={isDisabled}
        className={styles.leadStepThreeBtnDesc}
        type="button"
        handleClick={handleNextStepClick}
      >
        Weiter
        <LeadIcon className={styles.leadIcon} />
      </Button>
    </div>
  );
};

export default LeadStepThree;

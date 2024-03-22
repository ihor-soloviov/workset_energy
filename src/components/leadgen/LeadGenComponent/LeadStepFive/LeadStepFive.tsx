import React, { useState, MouseEvent } from 'react';
import styles from './LeadStepFive.module.css';
import { LeadStepProps } from '../types';
import LeadIcon from '/public/icons/lead-btn-arrow.svg';
import Button from '@/components/common/Button/Button';
import LeadStepFiveList from './LeadStepFiveList/LeadStepFiveList';

const LeadStepFive = ({
  formData,
  setFormData,
  step,
  setStep,
}: LeadStepProps) => {
  const [stepFiveValue, setStepFiveValue] = useState<null | string>(null);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleNextStepClick = () => {
    stepFiveValue && setFormData({ ...formData, stepFive: stepFiveValue });
    setStep(step + 1);
  };
  const handleItemClick = (e: MouseEvent<HTMLLIElement>, itemValue: string) => {
    setStepFiveValue(itemValue);
    setIsDisabled(false);
  };

  return (
    <div className={styles.stepFiveMainWrap}>
      <h3 className={styles.stepFiveMainTitle}>
        Wie viel Fläche steht für eine Solaranlage ca. zur Verfügung?
      </h3>
      <LeadStepFiveList
        stepFiveValue={stepFiveValue}
        handleItemClick={handleItemClick}
      />
      <Button
        disabled={isDisabled}
        className={styles.leadStepFiveBtn}
        type="button"
        handleClick={handleNextStepClick}
      >
        Weiter
      </Button>
      <Button
        disabled={isDisabled}
        className={styles.leadStepFiveBtnDesc}
        type="button"
        handleClick={handleNextStepClick}
      >
        Weiter
        <LeadIcon className={styles.leadIcon} />
      </Button>
    </div>
  );
};

export default LeadStepFive;

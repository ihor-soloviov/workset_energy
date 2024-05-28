import Button from '@/components/common/Button/Button';
import styles from './LeadStepOne.module.css';
import LeadStepOneList from './LeadStepOneList/LeadStepOneList';
import { LeadStepProps } from '../../types';
import React, { useState, MouseEvent } from 'react';

const LeadStepOne = ({ handleNextStepClick }: LeadStepProps) => {
  const [stepOneValue, setStepOneValue] = useState<null | string>(null);

  const [isDisabled, setIsDisabled] = useState(true);

  const handleItemClick = (e: MouseEvent<HTMLLIElement>, itemValue: string) => {
    setStepOneValue(itemValue);
    setIsDisabled(false);
  };

  return (
    <div className={styles.stepOneWrap}>
      <h2 className={styles.stepOneTitle}>
        {`Bist du Eigentümer(-in) der Immobilie,`}
      </h2>
      <p className={styles.stepOneText}>für die du die PV-Anlage planst?</p>
      <LeadStepOneList
        stepValue={stepOneValue}
        handleItemClick={handleItemClick}
      />
      <Button
        disabled={isDisabled}
        handleClick={() =>
          handleNextStepClick &&
          handleNextStepClick(stepOneValue, 'propertyType')
        }
        type="button"
        className={styles.stepOneBtn}
      >
        Weiter
      </Button>
    </div>
  );
};

export default LeadStepOne;

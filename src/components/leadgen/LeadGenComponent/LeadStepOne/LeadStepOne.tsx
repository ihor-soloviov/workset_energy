import React, { useState, MouseEvent } from 'react';
import styles from './LeadStepOne.module.css';
import { inter } from '@/utils/fonts';
import { LeadStepProps } from '../types';
import Button from '@/components/common/Button/Button';
import LeadIcon from '/public/icons/lead-btn-arrow.svg';
import LeadStepOneList from './LeadStepOneList/LeadStepOneList';

const LeadStepOne = ({
  formData,
  setFormData,
  step,
  setStep,
}: LeadStepProps) => {
  const [stepOneValue, setStepOneValue] = useState<null | string>(null);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleNextStepClick = () => {
    stepOneValue && setFormData({ ...formData, stepOne: stepOneValue });
    setStep(step + 1);
  };
  const handleItemClick = (e: MouseEvent<HTMLLIElement>, itemValue: string) => {
    setStepOneValue(itemValue);
    setIsDisabled(false);
  };

  return (
    <div className={styles.stepOneMainWrap}>
      <h2 className={styles.stepOneMainTitle}>
        Was kostet dich dein
        <br className={styles.stepOneBr} /> PV-Project?
      </h2>
      <p className={`${styles.stepOneText} ${inter.className}`}>
        Füllen Sie das kurze Formular aus und erhalten Sie Ihr individuelles
        Angebot!
      </p>
      <h3 className={styles.stepOneTitle}>Welcher  Immobilieentyp</h3>

      <LeadStepOneList
        stepOneValue={stepOneValue}
        handleItemClick={handleItemClick}
      />
      <Button
        disabled={isDisabled}
        className={styles.leadStepOneBtn}
        type="button"
        handleClick={handleNextStepClick}
      >
        Weiter
      </Button>
      <Button
        disabled={isDisabled}
        className={styles.leadStepOneBtnDesc}
        type="button"
        handleClick={handleNextStepClick}
      >
        Weiter
        <LeadIcon className={styles.leadIcon} />
      </Button>
    </div>
  );
};

export default LeadStepOne;

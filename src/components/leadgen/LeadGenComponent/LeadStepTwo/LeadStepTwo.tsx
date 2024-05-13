import React, { useState } from 'react';
import styles from './LeadStepTwo.module.css';
import { inter } from '@/utils/fonts';
import { LeadStepProps } from '../types';
import LeadStepTwoSlider from './LeadStepTwoSlider/LeadStepTwoSlider';
import Button from '@/components/common/Button/Button';
import LeadIcon from '/public/icons/lead-btn-arrow.svg';

const LeadStepTwo = ({
  formData,
  setFormData,
  step,
  setStep,
}: LeadStepProps) => {
  const [rangeValue, setRangeValue] = useState<number>(4000);

  const formatValue = (value: number) =>
    value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  const handleNextStepClick = () => {
    setFormData({ ...formData, kWhConsumption: formatValue(rangeValue) });
    setStep(step + 1);
  };

  return (
    <div className={styles.stepTwoMainWrap}>
      <h3 className={styles.stepTwoTitle}>
        Dein geschätzter Jahresstromverbrauch?
      </h3>
      <p className={`${styles.stepTwoText} ${inter.className}`}>
        Du findest deinen Stromverbrauch auf deiner aktuellen Jahresabrechnung
        des Energieversorgers
      </p>
      <div className={styles.stepTwoWrap}>
        <div className={styles.stepTwoLabelWrap}>
          <p className={styles.stepTwoLabel}>kWh:</p>
          <div className={styles.stepTwoCountWrap}>
            <span className={styles.stepTwoCount}>
              {formatValue(rangeValue)}
            </span>
          </div>
        </div>
        <div className={styles.stepTwoInputWrap}>
          <LeadStepTwoSlider
            rangeValue={rangeValue}
            setRangeValue={setRangeValue}
            formatValue={formatValue}
          />
          <div className={styles.stepTwoRangeWrap}>
            <span className={`${styles.stepTwoRange} ${inter.className}`}>
              1.000
            </span>
            <span className={`${styles.stepTwoRange} ${inter.className}`}>
              15.000
            </span>
          </div>
        </div>
      </div>
      <Button
        className={styles.leadStepTwoBtn}
        type="button"
        handleClick={handleNextStepClick}
      >
        Weiter
      </Button>
      <Button
        className={styles.leadStepTwoBtnDesc}
        type="button"
        handleClick={handleNextStepClick}
      >
        Weiter
        <LeadIcon className={styles.leadIcon} />
      </Button>
    </div>
  );
};

export default LeadStepTwo;

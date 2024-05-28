'use client';

import styles from './LeadgenComponent.module.css';
import LeadStepOne from './LeadStepOne/LeadStepOne';
import LeadStepTwo from './LeadStepTwo/LeadStepTwo';
import LeadStepThree from './LeadStepThree/LeadStepThree';
import LeadStepFour from './LeadStepFour/LeadStepFour';
import LeadStepFive from './LeadStepFive/LeadStepFive';
import LeadStepSix from './LeadStepSix/LeadStepSix';
import LeadStepSeven from './LeadStepSeven/LeadStepSeven';
import { FormInitialValue } from '../types';
import { useEffect, useState } from 'react';
import { inter } from '@/utils/fonts';
import ProgressWrapIcon from '/public/icons/address-wrap.svg';

const formInitialValue: FormInitialValue = {
  propertyType: '',
  consultType: '',
  timePeriod: '',
  communicationType: '',
  kwpType: '',
  projectMessage: '',
  contactData: {
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    userPhone: '',
    userStreet: '',
    userPostcode: '',
  },
};

const LeadgenComponent = () => {
  const [formData, setFormData] = useState(formInitialValue);
  const [step, setStep] = useState(1);
  console.log(formData);
  const handlePrevStepClick = () => {
    clearStepValue(step - 1);
    setStep(step - 1);
  };

  const handleNextStepClick = (stepValue: string | null, key: string) => {
    stepValue && setFormData({ ...formData, [key]: stepValue });
    setStep(step + 1);
  };

  const currentStep = (step: number) => {
    switch (step) {
      case 1:
        return <LeadStepOne handleNextStepClick={handleNextStepClick} />;
      case 2:
        return (
          <LeadStepTwo
            handlePrevStepClick={handlePrevStepClick}
            handleNextStepClick={handleNextStepClick}
          />
        );
      case 3:
        return (
          <LeadStepThree
            handlePrevStepClick={handlePrevStepClick}
            handleNextStepClick={handleNextStepClick}
          />
        );
      case 4:
        return (
          <LeadStepFour
            handlePrevStepClick={handlePrevStepClick}
            handleNextStepClick={handleNextStepClick}
          />
        );
      case 5:
        return (
          <LeadStepFive
            handlePrevStepClick={handlePrevStepClick}
            handleNextStepClick={handleNextStepClick}
          />
        );
      case 6:
        return (
          <LeadStepSix
            handlePrevStepClick={handlePrevStepClick}
            handleNextStepClick={handleNextStepClick}
          />
        );
      case 7:
        return (
          <LeadStepSeven
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
            handlePrevStepClick={handlePrevStepClick}
          />
        );

      default:
        return;
    }
  };

  const clearStepValue = (step: number) => {
    switch (step) {
      case 1:
        return setFormData({
          ...formData,
          propertyType: formInitialValue.propertyType,
        });

      case 2:
        return setFormData({
          ...formData,
          consultType: formInitialValue.consultType,
        });

      case 3:
        return setFormData({
          ...formData,
          timePeriod: formInitialValue.timePeriod,
        });
      case 4:
        return setFormData({
          ...formData,
          communicationType: formInitialValue.communicationType,
        });
      case 5:
        return setFormData({
          ...formData,
          kwpType: formInitialValue.kwpType,
        });
      case 6:
        return setFormData({
          ...formData,
          projectMessage: formInitialValue.projectMessage,
        });
      case 7:
        return setFormData({
          ...formData,
          contactData: formInitialValue.contactData,
        });

      default:
        return;
    }
  };

  const calculateProgress = () => {
    switch (step) {
      case 1:
        return 0;
      case 2:
        return 22;
      case 3:
        return 44;
      case 4:
        return 65;
      case 5:
        return 80;
      case 6:
        return 87;
      case 7:
        return 99;
      default:
        return 0;
    }
  };

  useEffect(() => {
    if (step === 8) {
      setStep(1);
      setFormData(formInitialValue);
    }
  }, [step]);

  return (
    <div className={styles.leadMainWrap}>
      <div className={styles.leadProgressWrap}>
        <div className={styles.leadProgressLine}>
          <div
            className={styles.leadProgressLineInner}
            style={{ width: `${calculateProgress()}%` }}
          >
            <div
              className={`${styles.leadProggressPrecentWrap} ${step !== 1 ? styles.active : ''}`}
            >
              <ProgressWrapIcon
                className={`${styles.leadProgressIcon} ${step !== 1 ? styles.active : ''}`}
              />
              <p
                className={`${styles.leadProgressPercentage} ${inter.className}`}
              >
                {calculateProgress()}%
              </p>
            </div>
          </div>
        </div>
      </div>
      {currentStep(step)}
    </div>
  );
};

export default LeadgenComponent;

'use client';

import styles from './LeadgenComponent.module.css';
import LeadStepOne from './LeadStepOne/LeadStepOne';
import LeadStepTwo from './LeadStepTwo/LeadStepTwo';
import LeadStepThree from './LeadStepThree/LeadStepThree';
import LeadStepFour from './LeadStepFour/LeadStepFour';
import LeadStepFive from './LeadStepFive/LeadStepFive';
import LeadStepSix from './LeadStepSix/LeadStepSix';
import { FormInitialValue } from '../types';
import { useEffect, useState } from 'react';

const formInitialValue: FormInitialValue = {
  propertyType: '',
  consultType: '',
  timePeriod: '',
  communicationType: '',
  kwpType: '',
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

  const handlePrevStepClick = () => {
    clearStepValue(step - 1);
    setStep(step - 1);
  };

  const handleNextStepClick = (stepValue: string | null, key: string) => {
    stepValue && setFormData({ ...formData, [key]: stepValue });
    setStep(step + 1);
  };

  const currentClassName = () => {
    switch (step) {
      case 2:
        return 'small';
      case 3:
        return 'small';
      case 4:
        return 'medium';
      case 5:
        return 'medium';
      case 6:
        return 'large';
      default:
        return '';
    }
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
          contactData: formInitialValue.contactData,
        });

      default:
        return;
    }
  };

  useEffect(() => {
    if (step === 7) {
      setStep(1);
      setFormData(formInitialValue);
    }
  }, [step]);

  return (
    <div className={styles.leadMainWrap}>
      <div className={`${styles.leadWrap} ${styles[currentClassName()]} `}>
        <div className={styles.leadProgressWrap}>
          <div className={styles.leadProgressLine}></div>
        </div>
        {currentStep(step)}
      </div>
    </div>
  );
};

export default LeadgenComponent;

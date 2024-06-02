/* eslint-disable react-hooks/exhaustive-deps */
import styles from './LeadgenComponent.module.css';
import LeadStepOne from './LeadStepOne/LeadStepOne';
import LeadStepTwo from './LeadStepTwo/LeadStepTwo';
import LeadStepThree from './LeadStepThree/LeadStepThree';
import LeadStepFour from './LeadStepFour/LeadStepFour';
import LeadStepFive from './LeadStepFive/LeadStepFive';
import LeadStepSix from './LeadStepSix/LeadStepSix';
import LeadStepSeven from './LeadStepSeven/LeadStepSeven';
import { FormInitialValue, LeadgenComponentProps } from '../types';
import { useEffect, useState } from 'react';
import { inter } from '@/utils/fonts';
import { useGlobalStore } from '@/store/global-store';

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

const LeadgenComponent = ({ step, setStep }: LeadgenComponentProps) => {
  const { isDesktop } = useGlobalStore();
  const [formData, setFormData] = useState(formInitialValue);
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

  useEffect(() => {
    if (step === 8) {
      setStep(1);
      setFormData(formInitialValue);
    }
  }, [step]);

  return (
    <div id={!isDesktop ? 'leadgen' : ''} className={styles.leadMainWrap}>
      <div className={styles.leadProgressWrap}>
        <ul className={styles.leadProgressList}>
          {[1, 2, 3, 4, 5, 6, 7].map(item => (
            <li
              className={`${styles.leadProgressItem} ${step === item || item < step ? styles.active : ''}`}
              key={item}
            ></li>
          ))}
        </ul>
        <p className={`${styles.leadProgressText} ${inter.className}`}>
          <span>{`${step} `}</span>von 7
        </p>
      </div>
      {currentStep(step)}
    </div>
  );
};

export default LeadgenComponent;

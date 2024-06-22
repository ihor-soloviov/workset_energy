/* eslint-disable react-hooks/exhaustive-deps */
import { inter } from '@/utils/fonts';
import { useEffect, useState } from 'react';
import LeadStepOne from './LeadStepOne/LeadStepOne';
import LeadStepTwo from './LeadStepTwo/LeadStepTwo';
import LeadStepThree from './LeadStepThree/LeadStepThree';
import LeadStepFour from './LeadStepFour/LeadStepFour';

import { FormInitialValue, LeadgenComponentProps } from '../types';
import { useNavigateTo } from '@/hooks/useNavigationToThanks';
import styles from './LeadgenComponent.module.css';
import { Navigate } from '@/types/navigate';

const formInitialValue: FormInitialValue = {
  kWp: '',
  componentsList: '',
  contactData: {
    userName: '',
    userPhone: '',
  },

  extraContactData: {
    userPostcode: '',
    userEmail: '',
    userMessage: '',
  },
};

const LeadgenComponent = ({ step, setStep }: LeadgenComponentProps) => {
  const [formData, setFormData] = useState(formInitialValue);
  const thankYou = useNavigateTo(Navigate.thanks);
  console.log('formData', formData);

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
        return (
          <LeadStepOne
            handlePrevStepClick={handlePrevStepClick}
            handleNextStepClick={handleNextStepClick}
          />
        );
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
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
            handlePrevStepClick={handlePrevStepClick}
          />
        );
      case 4:
        return (
          <LeadStepFour
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
          kWp: formInitialValue.kWp,
        });

      case 2:
        return setFormData({
          ...formData,
          componentsList: formInitialValue.componentsList,
        });

      case 3:
        return setFormData({
          ...formData,
          contactData: formInitialValue.contactData,
        });
      case 4:
        return setFormData({
          ...formData,
          extraContactData: formInitialValue.extraContactData,
        });

      default:
        return;
    }
  };

  useEffect(() => {
    if (step === 5) {
      thankYou();
      setStep(1);
      setFormData(formInitialValue);
    }
  }, [step]);

  return (
    <div className={styles.leadMainWrap}>
      {/* {step < 6 && (
        <div className={styles.leadProgressWrap}>
          <ul className={styles.leadProgressList}>
            {[1, 2, 3, 4, 5].map(item => (
              <li
                className={`${styles.leadProgressItem} ${step === item || item < step ? styles.active : ''}`}
                key={item}
              ></li>
            ))}
          </ul>
          <p className={`${styles.leadProgressText} ${inter.className}`}>
            <span>{`${step !== 6 && step !== 7 ? step : 5} `}</span>von 5
          </p>
        </div>
      )} */}
      {currentStep(step)}
    </div>
  );
};

export default LeadgenComponent;

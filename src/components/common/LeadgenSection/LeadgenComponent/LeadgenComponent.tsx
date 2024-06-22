/* eslint-disable react-hooks/exhaustive-deps */
import { inter } from '@/utils/fonts';
import { useEffect, useState } from 'react';
import CheckIcon from '/public/icons/check.svg';
import LeadStepOne from './LeadStepOne/LeadStepOne';
import LeadStepTwo from './LeadStepTwo/LeadStepTwo';
import LeadStepThree from './LeadStepThree/LeadStepThree';
import LeadStepFour from './LeadStepFour/LeadStepFour';
import { FormInitialValue, LeadgenComponentProps } from '../types';
import { useNavigateTo } from '@/hooks/useNavigationToThanks';
import styles from './LeadgenComponent.module.css';
import { Navigate } from '@/types/navigate';
import { useGlobalStore } from '@/store/global-store';

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

const leadProgressList = ['Stromverbrauch', 'Komponenten', 'Kontaktdaten'];

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
      {step < 4 && (
        <div className={styles.leadProgressWrap}>
          <ul className={styles.leadProgressList}>
            {leadProgressList.map((text, index) => (
              <li
                className={`${styles.leadProgressItem} ${step === index + 1 || index + 1 < step ? styles.active : ''}`}
                key={text}
              >
                {step > index + 1 ? (
                  <CheckIcon className={styles.leadProgressIcon} />
                ) : (
                  <p
                    className={`${styles.leadProgressCount} ${step === index + 1 || index + 1 < step ? styles.active : ''} ${inter.className}`}
                  >
                    {index + 1}
                  </p>
                )}
                <p className={styles.leadProgressText}>{text}</p>
                {index + 1 !== 3 && (
                  <ul className={styles.leadProgressLinesList}>
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <li
                        className={`${styles.leadProgressLine} ${index + 1 < step ? styles.active : ''}`}
                        key={num}
                      ></li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {currentStep(step)}
    </div>
  );
};

export default LeadgenComponent;

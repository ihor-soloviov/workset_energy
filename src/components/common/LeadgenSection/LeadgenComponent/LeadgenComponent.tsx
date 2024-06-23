/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { inter } from '@/utils/fonts';
import { useEffect, useState } from 'react';
import CheckIcon from '/public/icons/check.svg';
import LeadStepOne from './LeadStepOne/LeadStepOne';
import LeadStepTwo from './LeadStepTwo/LeadStepTwo';
import LeadStepThree from './LeadStepThree/LeadStepThree';
import LeadStepFour from './LeadStepFour/LeadStepFour';
import { FormInitialValue } from '../types';
import { useNavigateTo } from '@/hooks/useNavigationToThanks';
import styles from './LeadgenComponent.module.css';
import { Navigate } from '@/types/navigate';
import { useGlobalStore } from '@/store/global-store';
import LeadAmenitiesList from './LeadAmenitiesList/LeadAmenitiesList';

const formInitialValue: FormInitialValue = {
  kWp: '',
  componentsList: [],
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

const LeadgenComponent = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(formInitialValue);
  const thankYou = useNavigateTo(Navigate.thanks);
  const { isDesktop } = useGlobalStore();
  const leadProgressList = ['Stromverbrauch', 'Komponenten', 'Kontaktdaten'];
  const leadProgressLinesList = !isDesktop ? [1, 2, 3, 4, 5, 6] : [1, 2, 3, 4];
  console.log('formData', formData);

  const handlePrevStepClick = () => {
    clearStepValue(step - 1);
    setStep(step - 1);
  };

  const handleNextStepClick = (
    stepValue: string | string[] | null,
    key: string,
  ) => {
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
                <div
                  className={`${styles.leadProgressCountWrap} ${step === index + 1 || index + 1 < step ? styles.active : ''}`}
                >
                  <p
                    className={`${styles.leadProgressCount} ${step === index + 1 || index + 1 < step ? styles.active : ''} ${inter.className}`}
                  >
                    {step > index + 1 ? (
                      <CheckIcon className={styles.leadProgressIcon} />
                    ) : (
                      index + 1
                    )}
                  </p>
                </div>

                <p
                  className={`${styles.leadProgressText} ${step === index + 1 || index + 1 < step ? styles.active : ''}`}
                >
                  {text}
                </p>
                {index + 1 !== 3 && (
                  <ul className={styles.leadProgressLinesList}>
                    {leadProgressLinesList.map(num => (
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
      {step > 1 && step < 4 && (
        <div className={styles.leadAmentitesWrap}>
          <h3 className={`${styles.leadAmentitesTitle} ${inter.className}`}>
            Unser Vorteile
          </h3>
          <LeadAmenitiesList />
        </div>
      )}
    </div>
  );
};

export default LeadgenComponent;

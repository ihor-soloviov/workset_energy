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
import { usePathname } from 'next/navigation';

const formInitialValue: FormInitialValue = {
  kWp: '',
  componentsList: [],
  contactData: {
    userName: '',
    userPhone: '',
  },
};

const LeadgenComponent = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(formInitialValue);
  const [leadId, setLeadId] = useState<number | null>(null);

  const thankYou = useNavigateTo(Navigate.thanks);
  const { isDesktop } = useGlobalStore();
  const pathname = usePathname();
  const leadProgressList = ['Stromverbrauch', 'Komponenten', 'Kontaktdaten'];
  const leadProgressLinesList = !isDesktop ? [1, 2, 3, 4, 5, 6] : [1, 2, 3, 4];

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

  const getCurrentClass = (step: number, index: number) =>
    step === index + 1 || index + 1 < step;

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
            setLeadId={setLeadId}
          />
        );
      case 4:
        return (
          <LeadStepFour
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
            leadId={leadId}
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

      default:
        return;
    }
  };

  useEffect(() => {
    if (step === 5) {
      thankYou();
      setStep(1);
      setFormData(formInitialValue);
      setLeadId(null);
    }
  }, [step]);

  return (
    <div className={styles.leadMainWrap}>
      {step < 4 && (
        <div className={styles.leadProgressWrap}>
          <ul className={styles.leadProgressList}>
            {leadProgressList.map((text, index) => (
              <li
                className={`${styles.leadProgressItem} ${getCurrentClass(step, index) ? styles.active : ''}`}
                key={text}
              >
                <div
                  className={`${styles.leadProgressCountWrap} ${getCurrentClass(step, index) ? styles.active : ''}`}
                >
                  <p
                    className={`${styles.leadProgressCount} ${getCurrentClass(step, index) ? styles.active : ''} ${inter.className}`}
                  >
                    {step > index + 1 ? (
                      <CheckIcon className={styles.leadProgressIcon} />
                    ) : (
                      index + 1
                    )}
                  </p>
                </div>

                <p
                  className={`${styles.leadProgressText} ${getCurrentClass(step, index) ? styles.active : ''}`}
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

      {pathname !== '/' && step < 4 && (
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

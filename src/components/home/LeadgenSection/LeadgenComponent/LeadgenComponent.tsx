'use client';

import styles from './LeadgenComponent.module.css';
import LeadStepOne from './LeadStepOne/LeadStepOne';
import LeadStepTwo from './LeadStepTwo/LeadStepTwo';
import LeadStepThree from './LeadStepThree/LeadStepThree';
import LeadStepFour from './LeadStepFour/LeadStepFour';
import LeadStepFive from './LeadStepFive/LeadStepFive';
import LeadStepSix from './LeadStepSix/LeadStepSix';
import { FormInitialValue } from '../types';
import { useRouter } from 'next/router';
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
  //   const router = useRouter();
  const [formData, setFormData] = useState(formInitialValue);
  const [step, setStep] = useState(1);

  const handlePrevStepClick = () => {
    clearStepValue(step - 1);
    setStep(step - 1);
  };

  const currentStep = (step: number) => {
    switch (step) {
      case 1:
        return (
          <LeadStepOne
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      // case 2:
      //   return (
      //     <LeadStepTwo
      //       step={step}
      //       setStep={setStep}
      //       formData={formData}
      //       setFormData={setFormData}
      //       handlePrevStepClick={handlePrevStepClick}
      //     />
      //   );
      // case 3:
      //   return (
      //     <LeadStepThree
      //       step={step}
      //       setStep={setStep}
      //       formData={formData}
      //       setFormData={setFormData}
      //       handlePrevStepClick={handlePrevStepClick}
      //     />
      //   );
      // case 4:
      //   return (
      //     <LeadStepFour
      //       step={step}
      //       setStep={setStep}
      //       formData={formData}
      //       setFormData={setFormData}
      //       handlePrevStepClick={handlePrevStepClick}
      //     />
      //   );
      // case 5:
      //   return (
      //     <LeadStepFive
      //       step={step}
      //       setStep={setStep}
      //       formData={formData}
      //       setFormData={setFormData}
      //       handlePrevStepClick={handlePrevStepClick}
      //     />
      //   );
      // case 6:
      //   return (
      //     <LeadStepSix
      //       step={step}
      //       setStep={setStep}
      //       formData={formData}
      //       setFormData={setFormData}
      //       handlePrevStepClick={handlePrevStepClick}
      //     />
      //   );

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
      <div className={styles.leadWrap}>
        <div className={styles.leadProgressWrap}>
          <div className={styles.leadProgressLine}></div>
        </div>
        {currentStep(step)}
      </div>
    </div>
  );
};

export default LeadgenComponent;

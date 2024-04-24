'use client';
import React, { useState, useEffect } from 'react';
import styles from './LeadGenComponent.module.css';
import Button from '../../common/Button/Button';
import BurgerIcon from '/public/icons/lead-burger.svg';
import BackArrowIcon from '/public/icons/lead-arrow.svg';
import LeadStepOne from './LeadStepOne/LeadStepOne';
import LeadStepTwo from './LeadStepTwo/LeadStepTwo';
import LeadStepThree from './LeadStepThree/LeadStepThree';
import LeadStepFour from './LeadStepFour/LeadStepFour';
import LeadStepFive from './LeadStepFive/LeadStepFive';
import LeadStepSix from './LeadStepSix/LeadStepSix';
import LeadStepSeven from './LeadStepSeven/LeadStepSeven';
import LeadStepModal from './LeadStepModal/LeadStepModal';
import MobileMenu from '../../Header/MobileMenu/MobileMenu';
import { FormInitialValue } from './types';

const formInitialValue: FormInitialValue = {
  propertyType: '',
  kWhConsumption: '',
  roofBuiltTime: '',
  roofType: '',
  solarSizesArea: '',
  pvPlanForm: { postcode: '', location: '', street: '', houseNumber: '' },
  contactData: {
    userName: '',
    userEmail: '',
    userPhone: '',
    userComment: '',
  },
};

const LeadGenComponent = () => {
  const [formData, setFormData] = useState(formInitialValue);
  const [step, setStep] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(formData);

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
      case 2:
        return (
          <LeadStepTwo
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 3:
        return (
          <LeadStepThree
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 4:
        return (
          <LeadStepFour
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 5:
        return (
          <LeadStepFive
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 6:
        return (
          <LeadStepSix
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 7:
        return (
          <LeadStepSeven
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
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
          kWhConsumption: formInitialValue.kWhConsumption,
        });

      case 3:
        return setFormData({
          ...formData,
          roofBuiltTime: formInitialValue.roofBuiltTime,
        });
      case 4:
        return setFormData({
          ...formData,
          roofType: formInitialValue.roofType,
        });
      case 5:
        return setFormData({
          ...formData,
          solarSizesArea: formInitialValue.solarSizesArea,
        });
      case 6:
        return setFormData({
          ...formData,
          pvPlanForm: formInitialValue.pvPlanForm,
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

  const handlePrevStepClick = () => {
    clearStepValue(step - 1);
    setStep(step - 1);
  };

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);
  const handleModalClick = () => setIsModalOpen(!isModalOpen);

  useEffect(() => {
    if (step === 8) {
      setIsModalOpen(!isModalOpen);
      setStep(1);
      setFormData(formInitialValue);
    }
  }, [step, isModalOpen]);

  return (
    <div
      className={`${styles.leadMainWrap} ${step !== 1 ? styles.active : ''} ${isMenuOpen ? styles.modal : ''}`}
    >
      <div className={styles.leadContainer}>
        {step !== 1 && (
          <nav
            className={`${styles.leadNav} ${step !== 1 ? styles.active : ''}`}
          >
            <Button
              handleClick={handlePrevStepClick}
              className={styles.leadBackBtn}
              type="button"
            >
              <BackArrowIcon className={styles.leadBackIcon} />
            </Button>
            <Button
              handleClick={handleMenuClick}
              className={styles.leadBurgerBtn}
              type="button"
            >
              <BurgerIcon className={styles.leadBurgerIcon} />
            </Button>
          </nav>
        )}

        {step !== 8 && (
          <div className={styles.leadCountWrap}>
            <div className={styles.leadLine}></div>
            <ul className={styles.leadLineList}>
              {[1, 2, 3].map((_, index) => (
                <li className={styles.leadLineItem} key={index}></li>
              ))}
            </ul>
            <p className={styles.leadCount}>
              {step}/<span className={styles.leadCountSpan}>7</span>
            </p>
          </div>
        )}
        {currentStep(step)}
      </div>
      {isMenuOpen && <MobileMenu handleMenuClick={handleMenuClick} />}
      {isModalOpen && <LeadStepModal handleModalClick={handleModalClick} />}
    </div>
  );
};

export default LeadGenComponent;

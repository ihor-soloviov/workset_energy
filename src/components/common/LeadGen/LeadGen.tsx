'use client';
import React, { useState, useEffect, useContext } from 'react';

import styles from './LeadGen.module.css';
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
import LeadStepEight from './LeadStepEight/LeadStepEight';
import MobileContactList from '../../Header/MobileMenu/MobileContactList/MobileContactList';
import MobileSocialList from '../../Header/MobileMenu/MobileSocialList/MobileSocialList';
import MobileMenu from '../../Header/MobileMenu/MobileMenu';

export type FormInitialValue = {
  stepOne: string;
  stepTwo: string;
  stepThree: string;
  stepFour: string;
  stepFive: string;
  stepSix: string;
  stepSeven: string;
};

const LeadGen = () => {
  const formInitialValue = {
    stepOne: '',
    stepTwo: '',
    stepThree: '',
    stepFour: '',
    stepFive: '',
    stepSix: '',
    stepSeven: '',
  };

  const [formData, setFormData] = useState(formInitialValue);
  const [step, setStep] = useState(1);
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentStep = (step: number) => {
    switch (step) {
      case 1:
        return <LeadStepOne />;
      case 2:
        return <LeadStepTwo />;
      case 3:
        return <LeadStepThree />;
      case 4:
        return <LeadStepFour />;
      case 5:
        return <LeadStepFive />;
      case 6:
        return <LeadStepSix />;
      case 7:
        return <LeadStepSeven />;
      case 8:
        return <LeadStepEight />;
      default:
        return;
    }
  };

  const handleNextStepClick = () => {
    setStep(step + 1);
  };
  const handlePrevStepClick = () => {
    setStep(step - 1);
  };
  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    step === 8 && setStep(1);
  }, [step]);

  return (
    <>
      <div
        className={`${styles.leadMainWrap} ${step !== 1 ? styles.active : ''}`}
      >
        <div className={styles.leadContainer}>
          {step !== 1 && step !== 8 && (
            <nav
              className={`${styles.leadNav} ${step === 1 || step === 8 ? '' : styles.active}`}
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

          <div className={styles.leadCountWrap}>
            <div className={styles.leadLine}></div>

            <p className={styles.leadCount}>
              {step}/<span className={styles.leadCountSpan}>7</span>
            </p>
          </div>
          {currentStep(step)}
          <Button
            //  disabled={isDisabledBtn}
            className={`${styles.leadStepBtn} ${step !== 1 && step !== 8 && styles.active}`}
            type="button"
            handleClick={handleNextStepClick}
          >
            Weiter
          </Button>
        </div>
        {step !== 1 && step !== 8 && (
          <div className={styles.leadContactWrap}>
            <div className={styles.leadContactContainer}>
              <MobileContactList />
              <MobileSocialList />
            </div>
          </div>
        )}
        {isMenuOpen && <MobileMenu handleMenuClick={handleMenuClick} />}
      </div>
    </>
  );
};

export default LeadGen;

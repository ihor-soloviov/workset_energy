import Button from '@/components/common/Button/Button';
import styles from './LeadStepSix.module.css';
import useHashObserver from '@/hooks/useHashObserver';
import React, { useState } from 'react';
import { LeadFormProps } from '../../types';
import { inter } from '@/utils/fonts';
import { ThreeDots } from 'react-loader-spinner';
import { useGlobalStore } from '@/store/global-store';

import { formDataPost } from '@/utils/api';

const LeadStepSix = ({
  formData,
  setFormData,
  step,
  setStep,
}: LeadFormProps) => {
  useHashObserver('optionalstep');
  const [stepSixValue, setstepSixValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setPopupAction } = useGlobalStore();

  const postLeadgenData = async () => {
    setIsLoading(true);

    const leadGenData = new FormData();
    const leadGenFinalData = { ...formData, projectMessage: stepSixValue };
    Object.entries(leadGenFinalData).forEach(([key, value]) => {
      if (typeof value === 'object' && !Array.isArray(value)) {
        leadGenData.append(key, JSON.stringify(value));
      } else {
        leadGenData.append(key, value.toString());
      }
    });

    console.log('leadGenFinalData', leadGenFinalData);

    await formDataPost(leadGenData, 'leadgen', setPopupAction);

    setIsLoading(false);
    setStep(step + 1);
  };

  return (
    <div id="optionalstep" className={styles.stepSixWrap}>
      <h2 className={styles.stepSixTitle}>Schreibe uns eine kurze Nachricht</h2>
      <p className={styles.stepSixText}>
        Willst du uns noch etwas Wichtiges zu deinem geplanten PV-Projekt
        mitteilen?
      </p>

      <p className={styles.stepSixBottomText}>
        <span>Bsp.:</span> Wie viel kWp sind geplant? Wie viele Module sind
        geplant? Gewünschte PV-Komponenten! Interesse an dynamischem Tarif! etc.
      </p>

      <textarea
        placeholder="Text"
        value={stepSixValue}
        onChange={e => setstepSixValue(e.target.value)}
        className={`${styles.stepSixInput} ${inter.className}`}
      />

      <Button
        handleClick={postLeadgenData}
        type="submit"
        className={styles.stepSixBtn}
      >
        {isLoading ? (
          <ThreeDots
            visible={true}
            height="50"
            width="50"
            color="#fff"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass={styles.loader}
          />
        ) : (
          'Absenden'
        )}
      </Button>
    </div>
  );
};

export default LeadStepSix;

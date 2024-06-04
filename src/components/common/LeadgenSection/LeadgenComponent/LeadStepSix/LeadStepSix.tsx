import Button from '@/components/common/Button/Button';
import styles from './LeadStepSix.module.css';
import useHashObserver from '@/hooks/useHashObserver';
import React, { useState } from 'react';
import { LeadStepProps } from '../../types';
import { inter } from '@/utils/fonts';
import { ThreeDots } from 'react-loader-spinner';

const LeadStepSix = ({ handleNextStepClick, isLoading }: LeadStepProps) => {
  useHashObserver('optionalstep');
  const [stepSixValue, setstepSixValue] = useState('');

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
        handleClick={() =>
          handleNextStepClick &&
          handleNextStepClick(stepSixValue, 'projectMessage')
        }
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

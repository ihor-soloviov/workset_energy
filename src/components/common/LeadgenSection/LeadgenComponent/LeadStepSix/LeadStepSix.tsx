import Button from '@/components/common/Button/Button';
import styles from './LeadStepSix.module.css';

import React, { useState } from 'react';
import { LeadStepProps } from '../../types';
import { inter } from '@/utils/fonts';

const LeadStepSix = ({
  handleNextStepClick,
  handlePrevStepClick,
}: LeadStepProps) => {
  const [stepSixValue, setStepSixValue] = useState('');
  console.log(stepSixValue);

  return (
    <div className={styles.stepSixWrap}>
      <h2
        className={styles.stepSixTitle}
      >{`Schreibe uns eine kurze Nachricht :)`}</h2>
      <p className={styles.stepSixText}>
        Willst du uns noch etwas Wichtiges zu deinem geplanten PV-Projekt
        mitteilen?
      </p>

      <textarea
        placeholder="Text"
        value={stepSixValue}
        onChange={e => setStepSixValue(e.target.value)}
        className={`${styles.stepSixInput} ${inter.className}`}
      />
      <div className={styles.stepSixBtnWrap}>
        <Button
          handleClick={handlePrevStepClick}
          type="button"
          className={styles.stepSixBtn}
        >
          Züruck
        </Button>
        <Button
          handleClick={() =>
            handleNextStepClick &&
            handleNextStepClick(stepSixValue, 'projectMessage')
          }
          type="submit"
          className={styles.stepSixBtn}
        >
          Weiter
        </Button>
      </div>
    </div>
  );
};

export default LeadStepSix;

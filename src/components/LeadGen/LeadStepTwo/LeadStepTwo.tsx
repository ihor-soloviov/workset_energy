import React, { useState, useEffect } from 'react';
import styles from './LeadStepTwo.module.css';
import { inter } from '@/utils/fonts';
import WorksetIcon from '/public/icons/workset.svg';

const LeadStepTwo = () => {
  return (
    <div className={styles.stepTwoMainWrap}>
      <h3 className={styles.stepTwoTitle}>
        Dein geschätzter Jahresstromverbrauch?
      </h3>
      <p className={`${styles.stepTwoTopText} ${inter.className}`}>
        Sie finden Ihren Stromverbrauch auf Ihrer aktuellen Jahresabrechnung des
        Energieversorgers
      </p>
      <div className={styles.stepTwoWrap}>
        <div className={styles.stepTwoLabelWrap}>
          <p className={styles.stepTwoLabel}>kWh:</p>
          <div className={styles.stepTwoCountWrap}>
            <span className={styles.stepTwoCount}>4.000</span>
          </div>
        </div>
        <div className={styles.stepTwoInputWrap}>
          <input className={styles.stepTwoInput} />
          <div className={styles.stepTwoRangeWrap}>
            <span className={`${styles.stepTwoRange} ${inter.className}`}>
              1.000
            </span>
            <span className={`${styles.stepTwoRange} ${inter.className}`}>
              15.000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadStepTwo;

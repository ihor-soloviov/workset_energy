import React, { useState, useEffect } from 'react';
import styles from './LeadStepOne.module.css';
import { inter } from '@/utils/fonts';
import PrivatHaushaltIcon from '/public/icons/privathaushalt.svg';
import GewerbeIcon from '/public/icons/gewerbe.svg';

const LeadStepOne = () => {
  return (
    <div className={styles.stepOneMainWrap}>
      <h2 className={styles.stepOneMainTitle}>
        Was kostet dich dein
        <br className={styles.stepOneBr} /> PV-Project?
      </h2>
      <p className={`${styles.stepOneTopText} ${inter.className}`}>
        Füllen Sie das kurze Formular aus und erhalten Sie Ihr individuelles
        Angebot!
      </p>
      <h3 className={styles.stepOneTitle}>Welcher  Immobilieentyp</h3>
      <ul className={styles.stepOneList}>
        <li className={styles.stepOneItem}>
          <div className={styles.stepOneWrap}>
            <PrivatHaushaltIcon className={styles.stepOneIcon} />
            <p className={`${styles.stepOneText} ${inter.className}`}>
              Privathaushalt
            </p>
          </div>
        </li>
        <li className={styles.stepOneItem}>
          <div className={styles.stepOneWrap}>
            <GewerbeIcon className={styles.stepOneIcon} />
            <p className={`${styles.stepOneText} ${inter.className}`}>
              Gewerbe
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LeadStepOne;

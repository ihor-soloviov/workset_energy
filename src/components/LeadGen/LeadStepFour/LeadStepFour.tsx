import React, { useState, useEffect } from 'react';
import styles from './LeadStepFour.module.css';

import WorksetIcon from '/public/icons/workset.svg';

const LeadStepFour = () => {
  return (
    <div>
      <h2>Was kostet dich dein PV-Project?</h2>
      <p>
        Füllen Sie das kurze Formular aus und erhalten Sie Ihr individuelles
        Angebot!
      </p>
      <h3>Welcher  Immobilieentyp</h3>
      <ul>
        <li>
          <div className={styles.stepBtn}>
            <WorksetIcon />
            <p></p>
          </div>
        </li>
        <li>
          <div className={styles.stepBtn}>
            <WorksetIcon />
            <p></p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LeadStepFour;

import styles from './LeadStepFourList.module.css';
import { stepFourItems } from './leadStepFourItems';
import React from 'react';

const LeadStepFourList = () => {
  return (
    <ul className={styles.stepFourList}>
      {stepFourItems.map(({ title, icon }) => (
        <li className={styles.stepFourItem} key={title}>
          <div className={styles.stepFourWrap}>
            {icon &&
              React.createElement(
                icon,
                {
                  className: `${styles.stepFourIcon}`,
                },
                null,
              )}
            <h4 className={styles.stepFourTitle}>{title}</h4>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LeadStepFourList;

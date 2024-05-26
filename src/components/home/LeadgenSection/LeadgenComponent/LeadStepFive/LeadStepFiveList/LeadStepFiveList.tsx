import styles from './LeadStepFiveList.module.css';
import { stepFiveItems } from './leadStepFiveItems';
import React from 'react';

const LeadStepFiveList = () => {
  return (
    <ul className={styles.stepFiveList}>
      {stepFiveItems.map(({ title, icon }) => (
        <li className={styles.stepFiveItem} key={title}>
          <div className={styles.stepFiveWrap}>
            {icon &&
              React.createElement(
                icon,
                {
                  className: `${styles.stepFiveIcon}`,
                },
                null,
              )}
            <h4 className={styles.stepFiveTitle}>{title}</h4>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LeadStepFiveList;

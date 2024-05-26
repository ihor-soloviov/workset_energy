import styles from './LeadStepTwoList.module.css';
import { stepTwoItems } from './leadStepTwoItems';
import React from 'react';

const LeadStepTwoList = () => {
  return (
    <ul className={styles.stepTwoList}>
      {stepTwoItems.map(({ title, icon }) => (
        <li className={styles.stepTwoItem} key={title}>
          <div className={styles.stepTwoWrap}>
            {icon &&
              React.createElement(
                icon,
                {
                  className: `${styles.stepTwoIcon}`,
                },
                null,
              )}
            <h4 className={styles.stepTwoTitle}>{title}</h4>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LeadStepTwoList;

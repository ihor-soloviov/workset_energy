import { LeadStepListProps } from '../../../types';
import styles from './LeadStepFiveList.module.css';
import { stepFiveItems } from './leadStepFiveItems';
import React from 'react';

const LeadStepFiveList = ({
  handleItemClick,
  stepValue,
}: LeadStepListProps) => {
  return (
    <ul className={styles.stepFiveList}>
      {stepFiveItems.map(({ title, icon }) => (
        <li
          onClick={e => handleItemClick(e, title)}
          className={`${styles.stepFiveItem} ${stepValue === title ? styles.active : ''}`}
          key={title}
        >
          <div className={styles.stepFiveWrap}>
            {icon &&
              React.createElement(
                icon,
                {
                  className: `${styles.stepFiveIcon} ${stepValue === title ? styles.active : ''}`,
                },
                null,
              )}
            <h4
              className={`${styles.stepFiveTitle} ${stepValue === title ? styles.active : ''}`}
            >
              {title}
            </h4>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LeadStepFiveList;

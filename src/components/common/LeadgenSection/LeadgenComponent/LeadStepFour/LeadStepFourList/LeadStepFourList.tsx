import { LeadStepListProps } from '../../../types';
import styles from './LeadStepFourList.module.css';
import { stepFourItems } from './leadStepFourItems';
import React from 'react';

const LeadStepFourList = ({
  handleItemClick,
  stepValue,
}: LeadStepListProps) => {
  return (
    <ul className={styles.stepFourList}>
      {stepFourItems.map(({ title, icon }) => (
        <li
          onClick={e => handleItemClick(e, title)}
          className={`${styles.stepFourItem} ${stepValue === title ? styles.active : ''}`}
          key={title}
        >
          <div className={styles.stepFourWrap}>
            {icon &&
              React.createElement(
                icon,
                {
                  className: `${styles.stepFourIcon} ${stepValue === title ? styles.active : ''}`,
                },
                null,
              )}
            <h4
              className={`${styles.stepFourTitle} ${stepValue === title ? styles.active : ''}`}
            >
              {title}
            </h4>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LeadStepFourList;

import { LeadStepListProps } from '../../../types';
import styles from './LeadStepThreeList.module.css';
import { stepThreeItems } from './leadStepThreeItems';
import React from 'react';

const LeadStepThreeList = ({
  handleItemClick,
  stepValue,
}: LeadStepListProps) => {
  return (
    <ul className={styles.stepThreeList}>
      {stepThreeItems.map(({ title, text }) => (
        <li
          onClick={e => handleItemClick(e, title)}
          className={`${styles.stepThreeItem} ${stepValue === title ? styles.active : ''}`}
          key={title}
        >
          <div className={styles.stepThreeWrap}>
            <h4
              className={`${styles.stepThreeTitle} ${stepValue === title ? styles.active : ''}`}
            >
              {title}
            </h4>
            <p
              className={`${styles.stepThreeText} ${stepValue === title ? styles.active : ''}`}
            >
              {text}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LeadStepThreeList;

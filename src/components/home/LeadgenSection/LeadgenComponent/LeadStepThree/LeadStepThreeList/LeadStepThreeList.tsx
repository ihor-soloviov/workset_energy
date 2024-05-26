import styles from './LeadStepThreeList.module.css';
import { stepThreeItems } from './leadStepThreeItems';
import React from 'react';

const LeadStepThreeList = () => {
  return (
    <ul className={styles.stepThreeList}>
      {stepThreeItems.map(({ title, text }) => (
        <li className={styles.stepThreeItem} key={title}>
          <div className={styles.stepThreeWrap}>
            <h4 className={styles.stepThreeTitle}>{title}</h4>
            <p className={styles.stepThreeText}>{text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LeadStepThreeList;

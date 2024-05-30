import styles from './LeadStepOneList.module.css';
import { stepOneItems } from './leadStepOneItems';
import React, { MouseEvent } from 'react';
import { inter } from '@/utils/fonts';
import { LeadStepListProps } from '../../../types';
const LeadStepOneList = ({ handleItemClick, stepValue }: LeadStepListProps) => {
  return (
    <ul className={styles.stepOneList}>
      {stepOneItems.map(({ title, icon }) => (
        <li
          onClick={e => handleItemClick(e, title)}
          className={`${styles.stepOneItem} ${stepValue === title ? styles.active : ''}`}
          key={title}
        >
          <div className={styles.stepOneWrap}>
            {icon &&
              React.createElement(
                icon,
                {
                  className: `${styles.stepOneIcon} ${stepValue === title ? styles.active : ''}`,
                },
                null,
              )}
            <h4
              className={`${styles.stepOneTitle} ${inter.className} ${stepValue === title ? styles.active : ''}`}
            >
              {title}
            </h4>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LeadStepOneList;
import styles from './LeadStepOneList.module.css';
import { stepOneItems } from './leadStepOneItems';
import React, { MouseEvent } from 'react';
import { inter } from '@/utils/fonts';

type LeadStepOneListProps = {
  handleItemClick: (e: MouseEvent<HTMLLIElement>, itemValue: string) => void;
  stepOneValue: null | string;
};

const LeadStepOneList = ({
  handleItemClick,
  stepOneValue,
}: LeadStepOneListProps) => {
  return (
    <ul className={styles.stepOneList}>
      {stepOneItems.map(({ title, icon }) => (
        <li
          onClick={e => handleItemClick(e, title)}
          className={`${styles.stepOneItem} ${stepOneValue === title ? styles.active : ''}`}
          key={title}
        >
          <div className={styles.stepOneWrap}>
            {icon &&
              React.createElement(
                icon,
                {
                  className: `${styles.stepOneIcon} ${stepOneValue === title ? styles.active : ''}`,
                },
                null,
              )}
            <h4
              className={`${styles.stepOneTitle} ${inter.className} ${stepOneValue === title ? styles.active : ''}`}
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

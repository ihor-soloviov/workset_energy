import styles from './LeadStepOneList.module.css';
import React, { MouseEvent } from 'react';
import LeadStepFirstIcon from '/public/icons/privathaushalt.svg';
import LeadStepSecondIcon from '/public/icons/gewerbe.svg';

type LeadStepOneListProps = {
  handleItemClick: (e: MouseEvent<HTMLLIElement>, itemValue: string) => void;
  stepOneValue: null | string;
};

type LeadStepOneItem = {
  title: string;
  icon: React.ElementType;
};

const LeadStepOneList = ({
  handleItemClick,
  stepOneValue,
}: LeadStepOneListProps) => {
  const leadStepOneItems: LeadStepOneItem[] = [
    { title: 'Privathaushalt', icon: LeadStepFirstIcon },
    { title: 'Gewerbe', icon: LeadStepSecondIcon },
  ];

  return (
    <ul className={styles.stepOneList}>
      {leadStepOneItems.map(({ title, icon }, index) => (
        <li
          onClick={e => handleItemClick(e, title)}
          className={`${styles.stepOneItem} ${stepOneValue === title ? styles.active : ''}`}
          key={title}
        >
          <div className={styles.stepOneWrap}>
            <div className={styles.stepOneIconWrap}>
              {React.createElement(
                icon,
                {
                  className: `${styles.stepOneIcon} ${stepOneValue === title ? styles.active : ''}`,
                },
                null,
              )}
            </div>
            <h4
              className={`${styles.stepOneItemTitle} ${stepOneValue === title ? styles.active : ''}`}
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

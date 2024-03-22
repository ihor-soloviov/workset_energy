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
};

const LeadStepOneList = ({
  handleItemClick,
  stepOneValue,
}: LeadStepOneListProps) => {
  const leadStepOneItems: LeadStepOneItem[] = [
    { title: 'Privathaushalt' },
    { title: 'Gewerbe' },
  ];

  const currentIcon = (index: number, title: string) => {
    switch (index + 1) {
      case 1:
        return (
          <LeadStepFirstIcon
            className={`${styles.stepOneIcon} ${stepOneValue === title ? styles.active : ''}`}
          />
        );
      case 2:
        return (
          <LeadStepSecondIcon
            className={`${styles.stepOneIcon} ${stepOneValue === title ? styles.active : ''}`}
          />
        );

      default:
        return;
    }
  };

  return (
    <ul className={styles.stepOneList}>
      {leadStepOneItems.map(({ title }, index) => (
        <li
          onClick={e => handleItemClick(e, title)}
          className={`${styles.stepOneItem} ${stepOneValue === title ? styles.active : ''}`}
          key={title}
        >
          <div className={styles.stepOneWrap}>
            <div className={styles.stepOneIconWrap}>
              {currentIcon(index, title)}
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

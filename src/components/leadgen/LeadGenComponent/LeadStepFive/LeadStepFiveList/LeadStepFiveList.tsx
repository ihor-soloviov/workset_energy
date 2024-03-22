import styles from './LeadStepFiveList.module.css';
import React, { MouseEvent } from 'react';
import LeadStepFirstIcon from '/public/icons/lead-step-five-1.svg';
import LeadStepSecondIcon from '/public/icons/lead-step-five-2.svg';
import LeadStepThirdIcon from '/public/icons/lead-step-five-3.svg';
import LeadStepFourthIcon from '/public/icons/lead-step-five-4.svg';

type LeadStepFiveListProps = {
  handleItemClick: (e: MouseEvent<HTMLLIElement>, itemValue: string) => void;
  stepFiveValue: null | string;
};

type LeadStepFiveItem = {
  title: string;
};

const LeadStepFiveList = ({
  handleItemClick,
  stepFiveValue,
}: LeadStepFiveListProps) => {
  const leadStepFiveItems: LeadStepFiveItem[] = [
    { title: '0-60 m²' },
    { title: '60-200 m²' },
    { title: '200-800 m²' },
    { title: '800+ m²' },
  ];

  const currentIcon = (index: number, title: string) => {
    switch (index + 1) {
      case 1:
        return (
          <LeadStepFirstIcon
            className={`${styles.stepFiveIcon} ${stepFiveValue === title ? styles.active : ''}`}
          />
        );
      case 2:
        return (
          <LeadStepSecondIcon
            className={`${styles.stepFiveIcon} ${stepFiveValue === title ? styles.active : ''}`}
          />
        );
      case 3:
        return (
          <LeadStepThirdIcon
            className={`${styles.stepFiveIcon} ${stepFiveValue === title ? styles.active : ''}`}
          />
        );
      case 4:
        return (
          <LeadStepFourthIcon
            className={`${styles.stepFiveIcon} ${stepFiveValue === title ? styles.active : ''}`}
          />
        );
      default:
        return;
    }
  };

  return (
    <ul className={styles.stepFiveList}>
      {leadStepFiveItems.map(({ title }, index) => (
        <li
          onClick={e => handleItemClick(e, title)}
          className={`${styles.stepFiveItem} ${stepFiveValue === title ? styles.active : ''}`}
          key={title}
        >
          <div className={styles.stepFiveWrap}>
            <div className={styles.stepFiveIconWrap}>
              {currentIcon(index, title)}
            </div>
            <h4
              className={`${styles.stepFiveTitle} ${stepFiveValue === title ? styles.active : ''}`}
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

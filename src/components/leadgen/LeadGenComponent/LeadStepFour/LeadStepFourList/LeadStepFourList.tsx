import styles from './LeadStepFourList.module.css';
import React, { MouseEvent } from 'react';
import LeadStepFirstIcon from '/public/icons/lead-step-four-1.svg';
import LeadStepSecondIcon from '/public/icons/lead-step-four-2.svg';
import LeadStepThirdIcon from '/public/icons/lead-step-four-3.svg';
import LeadStepFourthIcon from '/public/icons/lead-step-four-4.svg';
import LeadStepFifthIcon from '/public/icons/lead-step-four-5.svg';

type LeadStepFourListProps = {
  handleItemClick: (e: MouseEvent<HTMLLIElement>, itemValue: string) => void;
  stepFourValue: null | string;
};

type LeadStepFourItem = {
  title: string;
};

const LeadStepFourList = ({
  handleItemClick,
  stepFourValue,
}: LeadStepFourListProps) => {
  const leadStepFourItems: LeadStepFourItem[] = [
    { title: 'Flachdach' },
    { title: 'Pultdach' },
    { title: 'Satteldach' },
    { title: 'Zeltdach' },
    { title: 'Sonstiges Dach' },
  ];

  const currentIcon = (index: number, title: string) => {
    switch (index + 1) {
      case 1:
        return (
          <LeadStepFirstIcon
            className={`${styles.stepFourIcon} ${styles.first} ${stepFourValue === title ? styles.active : ''}`}
          />
        );
      case 2:
        return (
          <LeadStepSecondIcon
            className={`${styles.stepFourIcon} ${styles.second} ${stepFourValue === title ? styles.active : ''}`}
          />
        );
      case 3:
        return (
          <LeadStepThirdIcon
            className={`${styles.stepFourIcon} ${styles.third} ${stepFourValue === title ? styles.active : ''}`}
          />
        );
      case 4:
        return (
          <LeadStepFourthIcon
            className={`${styles.stepFourIcon} ${styles.fourth} ${stepFourValue === title ? styles.active : ''}`}
          />
        );
      case 5:
        return (
          <LeadStepFifthIcon
            className={`${styles.stepFourIcon} ${styles.fifth} ${stepFourValue === title ? styles.active : ''}`}
          />
        );
      default:
        return;
    }
  };

  return (
    <ul className={styles.stepFourList}>
      {leadStepFourItems.map(({ title }, index) => (
        <li
          onClick={e => handleItemClick(e, title)}
          className={`${styles.stepFourItem} ${stepFourValue === title ? styles.active : ''}`}
          key={title}
        >
          <div className={styles.stepFourWrap}>
            <div className={styles.stepFourIconWrap}>
              {currentIcon(index, title)}
            </div>
            <h4
              className={`${styles.stepFourTitle} ${stepFourValue === title ? styles.active : ''}`}
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

import styles from './LeadStepThreeList.module.css';
import React, { MouseEvent } from 'react';
import LeadStepFirstIcon from '/public/icons/lead-step-three-1.svg';
import LeadStepSecondIcon from '/public/icons/lead-step-three-2.svg';
import LeadStepThirdIcon from '/public/icons/lead-step-three-3.svg';
import LeadStepFourthIcon from '/public/icons/lead-step-three-4.svg';

type LeadStepThreeListProps = {
  handleItemClick: (e: MouseEvent<HTMLLIElement>, itemValue: string) => void;
  stepThreeValue: null | string;
};

type LeadStepThreeItem = {
  title: string;
};

const LeadStepThreeList = ({
  handleItemClick,
  stepThreeValue,
}: LeadStepThreeListProps) => {
  const leadStepThreeItems: LeadStepThreeItem[] = [
    { title: 'Vor dem Jahr 200' },
    { title: 'Nach dem Jahr 200' },
    { title: 'Vor Kurzem' },
    { title: 'In Planung' },
  ];

  const currentIcon = (index: number, title: string) => {
    switch (index + 1) {
      case 1:
        return (
          <LeadStepFirstIcon
            className={`${styles.stepThreeIcon} ${styles.first} ${stepThreeValue === title ? styles.active : ''}`}
          />
        );
      case 2:
        return (
          <LeadStepSecondIcon
            className={`${styles.stepThreeIcon} ${styles.second} ${stepThreeValue === title ? styles.active : ''}`}
          />
        );
      case 3:
        return (
          <LeadStepThirdIcon
            className={`${styles.stepThreeIcon} ${styles.third} ${stepThreeValue === title ? styles.active : ''}`}
          />
        );
      case 4:
        return (
          <LeadStepFourthIcon
            className={`${styles.stepThreeIcon}  ${styles.fourth} ${stepThreeValue === title ? styles.active : ''}`}
          />
        );
      default:
        return;
    }
  };

  return (
    <ul className={styles.stepThreeList}>
      {leadStepThreeItems.map(({ title }, index) => (
        <li
          onClick={e => handleItemClick(e, title)}
          className={`${styles.stepThreeItem} ${stepThreeValue === title ? styles.active : ''}`}
          key={title}
        >
          <div className={styles.stepThreeWrap}>
            <div className={styles.stepThreeIconWrap}>
              {currentIcon(index, title)}
            </div>
            <h4
              className={`${styles.stepThreeTitle} ${stepThreeValue === title ? styles.active : ''}`}
            >
              {title}
            </h4>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LeadStepThreeList;

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
  icon: React.ElementType;
};

const LeadStepThreeList = ({
  handleItemClick,
  stepThreeValue,
}: LeadStepThreeListProps) => {
  const leadStepThreeItems: LeadStepThreeItem[] = [
    { title: 'Vor dem Jahr 200', icon: LeadStepFirstIcon },
    { title: 'Nach dem Jahr 200', icon: LeadStepSecondIcon },
    { title: 'Vor Kurzem', icon: LeadStepThirdIcon },
    { title: 'In Planung', icon: LeadStepFourthIcon },
  ];

  const getClassByIndex = (index: number) => {
    switch (index + 1) {
      case 1:
        return styles.first;
      case 2:
        return styles.second;
      case 3:
        return styles.third;
      case 4:
        return styles.fourth;
      default:
        return '';
    }
  };

  return (
    <ul className={styles.stepThreeList}>
      {leadStepThreeItems.map(({ title, icon }, index) => (
        <li
          onClick={e => handleItemClick(e, title)}
          className={`${styles.stepThreeItem} ${stepThreeValue === title ? styles.active : ''}`}
          key={title}
        >
          <div className={styles.stepThreeWrap}>
            <div className={styles.stepThreeIconWrap}>
              {React.createElement(
                icon,
                {
                  className: `${styles.stepThreeIcon} ${getClassByIndex(index)} ${stepThreeValue === title ? styles.active : ''}`,
                },
                null,
              )}
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

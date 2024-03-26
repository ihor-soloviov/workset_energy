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
  icon: React.ElementType;
};

const LeadStepFourList = ({
  handleItemClick,
  stepFourValue,
}: LeadStepFourListProps) => {
  const leadStepFourItems: LeadStepFourItem[] = [
    { title: 'Flachdach', icon: LeadStepFirstIcon },
    { title: 'Pultdach', icon: LeadStepSecondIcon },
    { title: 'Satteldach', icon: LeadStepThirdIcon },
    { title: 'Zeltdach', icon: LeadStepFourthIcon },
    { title: 'Sonstiges Dach', icon: LeadStepFifthIcon },
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
      case 5:
        return styles.fifth;
      default:
        return '';
    }
  };

  return (
    <ul className={styles.stepFourList}>
      {leadStepFourItems.map(({ title, icon }, index) => (
        <li
          onClick={e => handleItemClick(e, title)}
          className={`${styles.stepFourItem} ${stepFourValue === title ? styles.active : ''}`}
          key={title}
        >
          <div className={styles.stepFourWrap}>
            <div className={styles.stepFourIconWrap}>
              {React.createElement(
                icon,
                {
                  className: `${styles.stepFourIcon} ${getClassByIndex(index)} ${stepFourValue === title ? styles.active : ''}`,
                },
                null,
              )}
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

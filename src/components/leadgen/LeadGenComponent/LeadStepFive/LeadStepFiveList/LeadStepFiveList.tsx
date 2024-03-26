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
  icon: React.ElementType;
};

const LeadStepFiveList = ({
  handleItemClick,
  stepFiveValue,
}: LeadStepFiveListProps) => {
  const leadStepFiveItems: LeadStepFiveItem[] = [
    { title: '0-60 m²', icon: LeadStepFirstIcon },
    { title: '60-200 m²', icon: LeadStepSecondIcon },
    { title: '200-800 m²', icon: LeadStepThirdIcon },
    { title: '800+ m²', icon: LeadStepFourthIcon },
  ];

  return (
    <ul className={styles.stepFiveList}>
      {leadStepFiveItems.map(({ title, icon }) => (
        <li
          onClick={e => handleItemClick(e, title)}
          className={`${styles.stepFiveItem} ${stepFiveValue === title ? styles.active : ''}`}
          key={title}
        >
          <div className={styles.stepFiveWrap}>
            <div className={styles.stepFiveIconWrap}>
              {React.createElement(
                icon,
                {
                  className: `${styles.stepFiveIcon} ${stepFiveValue === title ? styles.active : ''}`,
                },
                null,
              )}
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

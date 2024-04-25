import styles from './LeadStepFiveList.module.css';
import React, { MouseEvent, useEffect } from 'react';
import LeadStepFirstIcon from '/public/icons/lead-step-five-1.svg';
import LeadStepSecondIcon from '/public/icons/lead-step-five-2.svg';
import LeadStepThirdIcon from '/public/icons/lead-step-five-3.svg';
import LeadStepFourthIcon from '/public/icons/lead-step-five-4.svg';

type LeadStepFiveListProps = {
  projectType: string;
  handleItemClick: (e: MouseEvent<HTMLLIElement>, itemValue: string) => void;
  stepFiveValue: null | string;
};

type LeadStepFiveItem = {
  title: string;
  icon: React.ElementType;
};

const LeadStepFiveList = ({
  projectType,
  handleItemClick,
  stepFiveValue,
}: LeadStepFiveListProps) => {
  const privateHouse = projectType === 'Privathaushalt';

  const leadStepFiveItems: LeadStepFiveItem[] = [
    { title: privateHouse ? '0-20 m²' : '0-60 m²', icon: LeadStepFirstIcon },
    {
      title: privateHouse ? '20-40 m²' : '60-200 m²',
      icon: LeadStepSecondIcon,
    },
    {
      title: privateHouse ? '40-100 m²' : '200-800 m²',
      icon: LeadStepThirdIcon,
    },
    { title: privateHouse ? '100+ m²' : '800+ m²', icon: LeadStepFourthIcon },
  ];

  return (
    <ul className={styles.stepFiveList}>
      {leadStepFiveItems.map(({ title, icon }) => {
        const isActive = stepFiveValue === title;
        return (
          <li
            onClick={e => handleItemClick(e, title)}
            className={`${styles.stepFiveItem} ${isActive ? styles.active : ''}`}
            key={title}
          >
            <div className={styles.stepFiveWrap}>
              <div className={styles.stepFiveIconWrap}>
                {React.createElement(
                  icon,
                  {
                    className: `${styles.stepFiveIcon} ${isActive ? styles.active : ''}`,
                  },
                  null,
                )}
              </div>
              <h4
                className={`${styles.stepFiveTitle} ${isActive ? styles.active : ''}`}
              >
                {title}
              </h4>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default LeadStepFiveList;

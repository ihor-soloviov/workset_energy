import { LeadStepListProps } from '../../../types';
import styles from './LeadStepOneList.module.css';
import { stepOneItems } from './leadStepOneItems';
import React from 'react';
import { useGlobalStore } from '@/store/global-store';
import { inter } from '@/utils/fonts';
const LeadStepOneList = ({ handleItemClick, stepValue }: LeadStepListProps) => {
  const { isDesktop } = useGlobalStore();
  return (
    <ul className={styles.stepOneList}>
      {stepOneItems.map(({ title, icon }) => (
        <li
          onClick={e => handleItemClick(e, title)}
          className={`${styles.stepOneItem} ${stepValue === title ? styles.active : ''}`}
          key={title}
        >
          <div className={styles.stepOneWrap}>
            {icon &&
              React.createElement(
                icon,
                {
                  className: `${styles.stepOneIcon} ${stepValue === title ? styles.active : ''}`,
                },
                null,
              )}
            <h4
              className={`${styles.stepOneTitle} ${isDesktop ? inter.className : ''} ${stepValue === title ? styles.active : ''}`}
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
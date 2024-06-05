import { LeadStepListProps } from '../../../types';
import styles from './LeadStepTwoList.module.css';
import { stepTwoItems } from './leadStepTwoItems';
import React from 'react';
import { useGlobalStore } from '@/store/global-store';
import { inter } from '@/utils/fonts';
const LeadStepTwoList = ({ handleItemClick, stepValue }: LeadStepListProps) => {
  const { isDesktop } = useGlobalStore();
  return (
    <ul className={styles.stepTwoList}>
      {stepTwoItems.map(({ title, icon }) => (
        <li
          onClick={e => handleItemClick(e, title)}
          className={`${styles.stepTwoItem} ${stepValue === title ? styles.active : ''}`}
          key={title}
        >
          <div className={styles.stepTwoWrap}>
            {icon &&
              React.createElement(
                icon,
                {
                  className: `${styles.stepTwoIcon} ${stepValue === title ? styles.active : ''}`,
                },
                null,
              )}
            <h4
              className={`${styles.stepTwoTitle} ${isDesktop ? inter.className : ''} ${stepValue === title ? styles.active : ''}`}
            >
              {title}
            </h4>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LeadStepTwoList;

import { useGlobalStore } from '@/store/global-store';
import { LeadStepListProps } from '../../../types';
import styles from './LeadStepTwoList.module.css';
import { stepTwoItems } from './leadStepTwoItems';
import React from 'react';
import { inter } from '@/utils/fonts';

const LeadStepTwoList = ({ handleItemClick, stepValue }: LeadStepListProps) => {
  const { isDesktop } = useGlobalStore();
  return (
    <ul className={styles.stepTwoList}>
      {stepTwoItems.map(
        ({ title, iconMob, iconDesk, iconDeskWhite, className }) => (
          <li
            onClick={e => handleItemClick(e, title)}
            className={`${styles.stepTwoItem} ${stepValue?.includes(title) ? styles.active : ''}`}
            key={title}
          >
            <div className={styles.stepTwoWrap}>
              {iconMob &&
                iconDesk &&
                React.createElement(
                  !isDesktop ? iconMob : iconDesk,
                  {
                    className: `${styles.stepTwoIcon} ${className ? styles[className] : ''} ${stepValue?.includes(title) ? styles.active : ''}`,
                  },
                  null,
                )}
              {iconDeskWhite &&
                isDesktop &&
                React.createElement(
                  iconDeskWhite,
                  {
                    className: `${styles.stepTwoIconWhite}  ${stepValue?.includes(title) ? styles.active : ''}`,
                  },
                  null,
                )}
              <h4
                className={`${styles.stepTwoTitle} ${stepValue?.includes(title) ? styles.active : ''}`}
              >
                {title}
              </h4>
            </div>
          </li>
        ),
      )}
    </ul>
  );
};

export default LeadStepTwoList;

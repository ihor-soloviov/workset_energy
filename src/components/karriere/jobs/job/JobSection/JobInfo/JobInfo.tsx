import styles from './JobInfo.module.css';
import { jobInfoItems } from './jobInfoItem';
import React from 'react';
import { inter } from '@/utils/fonts';
import { jobItem } from '../JobList/jobItem';

const JobInfo = () => {
  const currentData = (title: string) => {
    switch (title) {
      case 'Standort:':
        return jobItem.location;
      case 'Gehalt:':
        return jobItem.salary;
      case 'Grafik:':
        return jobItem.hours;
      default:
        return;
    }
  };

  return (
    <ul className={`${styles.jobInfoList} ${inter.className}`}>
      {jobInfoItems.map(({ title, icon }, index) => (
        <li className={styles.jobInfoItem} key={index}>
          <div className={styles.jobInfoTitleWrap}>
            {React.createElement(
              icon,
              {
                className: styles.jobInfoIcon,
              },
              null,
            )}
            <h3 className={styles.jobInfoTitle}>{title}</h3>
          </div>
          <p className={styles.jobInfoText}>{currentData(title)}</p>
        </li>
      ))}
    </ul>
  );
};

export default JobInfo;

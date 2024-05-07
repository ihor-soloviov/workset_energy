import styles from './JobInfo.module.css';
import { jobInfoItems } from './jobInfoItems';
import React from 'react';
import { inter, interTight } from '@/utils/fonts';
import { KarrierJobItem } from '@/types/infoTypes';

type JobInfoProps = {
  response: KarrierJobItem | null;
};

const JobInfo = ({ response }: JobInfoProps) => {
  const currentData = (title: string) => {
    switch (title) {
      case 'Standort:':
        return response && response.data.attributes.job_location;
      case 'Gehalt:':
        return response && response.data.attributes.job_salary;
      case 'Grafik:':
        return response && response.data.attributes.job_hours;
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
          <p className={`${styles.jobInfoText} ${interTight.className}`}>
            {currentData(title)}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default JobInfo;

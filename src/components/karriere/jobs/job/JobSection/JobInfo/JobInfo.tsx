import styles from './JobInfo.module.css';
import { jobInfoItems } from './jobInfoItem';
import React from 'react';
import { inter } from '@/utils/fonts';
const JobInfo = () => {
  return (
    <ul className={`${styles.jobInfoList} ${inter.className}`}>
      {jobInfoItems.map(({ text, title, icon }, index) => (
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
          <p className={styles.jobInfoText}>{text}</p>
        </li>
      ))}
    </ul>
  );
};

export default JobInfo;

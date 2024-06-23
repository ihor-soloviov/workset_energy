import styles from './LeadAmenitiesList.module.css';
import { leadAmenitiesItems } from './leadAmenitiesItems';
import React from 'react';
import { inter } from '@/utils/fonts';

const LeadAmenitiesList = () => {
  return (
    <ul className={styles.leadAmenitiesList}>
      {leadAmenitiesItems.map(({ title, text, icon }) => (
        <li
          className={`${styles.leadAmenitiesItem} ${inter.className}`}
          key={title}
        >
          {icon &&
            React.createElement(
              icon,
              {
                className: styles.leadAmenitiesIcon,
              },
              null,
            )}
          <h4 className={styles.leadAmenitiesTitle}>{title}</h4>
          <p className={styles.leadAmenitiesText}>{text}</p>
        </li>
      ))}
    </ul>
  );
};

export default LeadAmenitiesList;

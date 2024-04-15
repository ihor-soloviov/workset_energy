'use client';

import styles from './EmployeeList.module.css';
import Image from 'next/image';
import { inter } from '@/utils/fonts';
import ArrowIcon from '/public/icons/small-arrow-btn.svg';
import Button from '../../Button/Button';
import { employeeItems } from './employeeItems';

const EmployeeList = () => {
  const handleBtnClick = () => {
    const teamSection = document.getElementById('contact');
    teamSection && teamSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <ul className={styles.employeeList}>
      {employeeItems.map(({ text, title, imgMob, imgDesc, btn }) => (
        <li className={styles.employeeItem} key={title}>
          <Image
            className={styles.employeeImgMob}
            loading="lazy"
            src={imgMob}
            alt={title}
          />
          <Image
            className={styles.employeeImgDesc}
            loading="lazy"
            src={imgDesc}
            alt={title}
          />
          <div className={styles.employeeTextWrap}>
            <h3 className={styles.employeeTitle}>{title}</h3>
            <p className={`${styles.employeeText} ${inter.className}`}>
              {text}
            </p>
            {btn && (
              <Button
                handleClick={handleBtnClick}
                className={styles.employeeItemBtn}
                type="button"
              >
                Zum Angebot
                <ArrowIcon className={styles.employeeIcon} />
              </Button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default EmployeeList;

import styles from './EmployeeList.module.css';
import Image from 'next/image';
import { inter } from '@/utils/fonts';

import Button from '../../Button/Button';
import { employeeItems } from './employeeItems';
import { scrollToSection } from '@/utils/scroll';
import Arrow from '../../Arrow/Arrow';

type EmployeeListProps = {
  pathname: string;
};

const EmployeeList = ({ pathname }: EmployeeListProps) => {
  return (
    <ul className={styles.employeeList}>
      {employeeItems.map(({ text, title, imgMob, imgDesc, btn }) => (
        <li className={styles.employeeItem} key={title}>
          <Image
            quality={100}
            className={styles.employeeImgMob}
            loading="lazy"
            src={imgMob}
            alt={title}
          />
          <Image
            quality={100}
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
            {btn && pathname !== '/karriere' && (
              <Button
                handleClick={() => scrollToSection('kontact')}
                className={styles.employeeItemBtn}
                type="button"
              >
                Zum Angebot
                <Arrow className={styles.employeeIcon} />
              </Button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default EmployeeList;

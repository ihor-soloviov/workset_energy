'use client';
import Button from '@/components/common/Button/Button';
import styles from './StepList.module.css';
import { inter } from '@/utils/fonts';
import Image from 'next/image';
import BtnArrowIcon from '/public/icons/small-arrow-btn.svg';
import { stepItems } from './stepItems';
import useObserver from '@/hooks/useObserver';

const StepList = () => {
  useObserver(`.${styles.stepItem}`, `${styles.stepItemVisible}`);
  const getClass = (index: number) => {
    return (index + 1) % 2 === 0 ? styles.white : '';
  };
  const handleBtnClick = () => {
    const teamSection = document.getElementById('contact');
    teamSection && teamSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ul className={styles.stepList}>
      {stepItems.map(({ text, title, imgDesc, imgMob }, index) => (
        <li className={`${styles.stepItem} ${getClass(index)}`} key={title}>
          <Image
            loading="lazy"
            className={styles.stepImgMob}
            alt="title"
            src={imgMob}
          />
          <Image
            loading="lazy"
            className={styles.stepImgDesc}
            alt="title"
            src={imgDesc}
          />
          <div className={`${styles.stepTextWrap} ${getClass(index)}`}>
            <p
              className={`${styles.stepCount} ${getClass(index)} ${inter.className}`}
            >
              0<span className={styles.stepCountSpan}>{index + 1}</span>
            </p>
            <h3 className={`${styles.stepTitle} ${getClass(index)}`}>
              {title}
            </h3>
            <p className={`${styles.stepText} ${getClass(index)}`}>{text}</p>
            <Button
              handleClick={handleBtnClick}
              className={`${styles.stepBtn} ${getClass(index)}`}
              type="button"
            >
              Zum Angebot
              <BtnArrowIcon
                className={`${styles.stepBtnIcon} ${getClass(index)}`}
              />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StepList;

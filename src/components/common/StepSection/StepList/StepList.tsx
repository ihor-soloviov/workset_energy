'use client';
import Button from '@/components/common/Button/Button';
import styles from './StepList.module.css';
import { inter } from '@/utils/fonts';
import Image from 'next/image';
import BtnArrowIcon from '/public/icons/small-arrow-btn.svg';

import { motion } from 'framer-motion';
import { fromBotAnimation } from '@/animations/animations';
import { stepItems } from './stepItems';

const StepList = () => {
  const getClass = (index: number) => {
    return (index + 1) % 2 === 0 ? styles.white : '';
  };
  return (
    <ul className={styles.stepList}>
      {stepItems.map(({ text, title, imgDesc, imgMob }, index) => (
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.6, once: true }}
          variants={fromBotAnimation}
          className={`${styles.stepItem} ${getClass(index)}`}
          key={title}
        >
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
              className={`${styles.stepBtn} ${getClass(index)}`}
              type="button"
            >
              Zum Angebot{' '}
              <BtnArrowIcon
                className={`${styles.stepBtnIcon} ${getClass(index)}`}
              />
            </Button>
          </div>
        </motion.li>
      ))}
    </ul>
  );
};

export default StepList;

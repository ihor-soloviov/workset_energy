'use client';
import styles from './StepList.module.css';
import { inter } from '@/utils/fonts';
import Image from 'next/image';
import { stepItems } from './stepItems';
import useObserver from '@/hooks/useObserver';
import { renderText } from '@/utils/renderText';
import { useGlobalStore } from '@/store/global-store';
import Button from '../../Button/Button';

import { scrollToSection } from '@/utils/scroll';
import Arrow from '../../Arrow/Arrow';

const getClass = (index: number) => {
  return (index + 1) % 2 === 0 ? styles.white : '';
};

const StepList = () => {
  useObserver(`.${styles.stepItem}`, `${styles.stepItemVisible}`);
  const { isDesktop } = useGlobalStore();

  return (
    <ul className={styles.stepList}>
      {stepItems.map(
        ({ text, title, imgDesc, imgMob, className, btn }, index) => (
          <li className={`${styles.stepItem} ${getClass(index)}`} key={title}>
            <Image
              quality={100}
              loading="lazy"
              className={styles.stepImgMob}
              alt="title"
              src={imgMob}
            />
            <Image
              quality={100}
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

              {!isDesktop ? (
                renderText(text, `${styles.stepText} ${getClass(index)}`, true)
              ) : (
                <p
                  className={`${styles.stepText} ${inter.className} ${className ? styles[className] : ''} ${getClass(index)}`}
                >
                  {text.replace(/\n/g, '')}
                </p>
              )}
              {btn && (
                <Button
                  handleClick={() => scrollToSection('kontact')}
                  className={styles.stepBtn}
                  type="button"
                >
                  Zum Angebot
                  <Arrow className={styles.stepBtnIcon} />
                </Button>
              )}
            </div>
          </li>
        ),
      )}
    </ul>
  );
};

export default StepList;

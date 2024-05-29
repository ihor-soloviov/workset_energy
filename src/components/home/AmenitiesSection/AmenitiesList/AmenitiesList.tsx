import React, { useState } from 'react';
import styles from './AmenitiesList.module.css';
import { inter } from '@/utils/fonts';
import { amenitiesItems } from './amenitiesItems';
import BtnPlusIcon from '/public/icons/plus.svg';
import BtnMinusIcon from '/public/icons/minus.svg';
import CountUp from 'react-countup';
import Button from '@/components/common/Button/Button';
import { useGlobalStore } from '@/store/global-store';
const AmenitiesList = () => {
  const [visibleItems, setVisibleItems] = useState<Record<string, boolean>>({});
  const { isDesktop } = useGlobalStore();

  const toggleVisibility = (title: string) => {
    setVisibleItems(prevState => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  const currentTitle = (title: string) => {
    switch (title) {
      case '0':
        return title;
      case '30':
        return <CountUp duration={2} start={1} end={30} />;
      case '10.000':
        return <CountUp duration={2} start={1} end={10000} />;
      default:
        return;
    }
  };

  return (
    <ul className={styles.amenitiesList}>
      {amenitiesItems.map(
        ({
          mainSymbol,
          mainTitle,
          title,
          mainText,
          extraText,
          mainTextDesk,
          extraTextDesk,
        }) => (
          <li
            className={`${styles.amenitiesItem} ${visibleItems[title] ? styles.active : ''}`}
            key={title}
            onClick={() => toggleVisibility(title)}
          >
            <div className={styles.amenitiesMainWrap}>
              <h3 className={styles.amenitiesMainTitle}>
                {currentTitle(mainTitle)}
                <span>{mainSymbol}</span>
              </h3>
              <h4 className={`${styles.amenitiesTitle} ${inter.className}`}>
                {title}
              </h4>

              <div
                className={`${styles.amenitiesTextWrap} ${
                  !isDesktop ? inter.className : ''
                }`}
              >
                <p className={styles.amenitiesText}>
                  {!isDesktop ? mainText : mainTextDesk}
                </p>

                <p
                  className={`${styles.amenitiesExtraText} ${visibleItems[title] ? styles.active : ''}`}
                >
                  {!isDesktop ? extraText : extraTextDesk}
                </p>
              </div>
            </div>
            <Button
              handleClick={e => {
                e.stopPropagation();
                toggleVisibility(title);
              }}
              type="button"
              className={styles.amenitiesBtn}
            >
              <BtnPlusIcon
                className={`${styles.amenitiesIcon} ${visibleItems[title] ? styles.active : ''}`}
              />
              <BtnMinusIcon
                className={`${styles.amenitiesIcon} ${visibleItems[title] ? styles.active : ''}`}
              />
            </Button>
          </li>
        ),
      )}
    </ul>
  );
};

export default AmenitiesList;

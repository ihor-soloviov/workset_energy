'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/common/Button/Button';
import styles from './QuestionList.module.css';
import { useState } from 'react';
import { inter } from '@/utils/fonts';
import { QuestItem, questItems } from './questionItems';
import { scrollToSection } from '@/utils/scroll';
import { renderText } from '@/utils/renderText';
import BtnArrowIcon from '/public/icons/card-arrow.svg';
import { useGlobalStore } from '@/store/global-store';
const QuestionList = () => {
  const [visibleItems, setVisibleItems] = useState<Record<string, boolean>>({});

  const { isDesktop } = useGlobalStore();

  const toggleVisibility = (title: string) => {
    setVisibleItems(prevState => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  const router = useRouter();

  const handleBtnClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    leadSrc?: boolean,
  ) => {
    e.stopPropagation();

    leadSrc ? router.push('/#leadgen') : scrollToSection('kontact');
  };

  const renderListItems = (items: QuestItem[]) =>
    items.map(({ text, title, leadSrc, className }, index) => (
      <li
        onClick={() => toggleVisibility(title)}
        key={title}
        className={`${styles.questItem} ${visibleItems[title] ? styles.active : ''} ${className ? styles[className] : ''}`}
      >
        <div className={styles.questTitleWrap}>
          <p className={styles.questCount}>{`0${index + 1}`}</p>
          <h3
            className={`${styles.questTitle} ${!isDesktop ? inter.className : ''} ${className ? styles[className] : ''}`}
          >
            {title}
          </h3>
          <Button
            handleClick={e => {
              e.stopPropagation();
              toggleVisibility(title);
            }}
            type="button"
            className={styles.questToggleBtn}
          >
            <BtnArrowIcon
              className={`${styles.toggleIcon} ${visibleItems[title] ? styles.active : ''}`}
            />
          </Button>
        </div>
        <div
          className={`${styles.questTextWrap} ${visibleItems[title] ? styles.active : ''}`}
        >
          {renderText(text, styles.questText, true)}
          <Button
            handleClick={e => handleBtnClick(e, leadSrc)}
            type="button"
            className={styles.questConsultBtn}
          >
            Kostenlose Beratung
          </Button>
        </div>
      </li>
    ));

  const firstListItems = questItems.slice(0, 3);
  const secondListItems = questItems.slice(3, 6);

  return (
    <div className={styles.questListWrap}>
      {!isDesktop ? (
        <>
          {' '}
          <ul className={styles.questList}>
            {renderListItems(firstListItems)}
          </ul>
          <ul className={`${styles.questList} ${styles.second}`}>
            {renderListItems(secondListItems)}
          </ul>
        </>
      ) : (
        <ul className={styles.questList}>{renderListItems(questItems)}</ul>
      )}
    </div>
  );
};

export default QuestionList;

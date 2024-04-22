'use client';

import Button from '@/components/common/Button/Button';
import styles from './QuestionList.module.css';
import DropArrowIcon from '/public/icons/drop-arrow.svg';
import { useState } from 'react';
import { inter } from '@/utils/fonts';
import { QuestItem, questItems } from './questionItems';
import { scrollToSection } from '@/utils/scroll';

const QuestionList = () => {
  const [activeItems, setActiveItems] = useState<Array<string>>([]);

  const toggleActiveItem = (title: string) => {
    let result = [];
    if (activeItems?.includes(title)) {
      result = activeItems.filter(el => el !== title);
    } else {
      result = [...activeItems, title];
    }
    setActiveItems(result);
  };

  const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    scrollToSection('contact');
  };

  const renderText = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, index) => (
      <p className={`${styles.questText} ${inter.className}`} key={index}>
        {line}
      </p>
    ));
  };

  const renderListItems = (items: QuestItem[]) =>
    items.map(({ text, title }) => (
      <li
        onClick={() => toggleActiveItem(title)}
        key={title}
        className={`${styles.questItem} ${activeItems.includes(title) ? styles.open : ''}`}
      >
        <div className={styles.questTitleWrap}>
          <h3 className={`${styles.questTitle} ${inter.className}`}>{title}</h3>
          <Button
            handleClick={e => {
              e.stopPropagation();
              toggleActiveItem(title);
            }}
            type="button"
            className={styles.questToggleBtn}
          >
            <DropArrowIcon
              className={`${styles.toggleIcon} ${activeItems.includes(title) ? styles.visible : ''}`}
            />
          </Button>
        </div>
        <div
          className={`${styles.questTextWrap} ${activeItems.includes(title) ? styles.visible : styles.hidden}`}
        >
          {renderText(text)}
          <Button
            handleClick={handleBtnClick}
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
      <ul className={styles.questList}>{renderListItems(firstListItems)}</ul>
      <ul className={styles.questList}>{renderListItems(secondListItems)}</ul>
    </div>
  );
};

export default QuestionList;

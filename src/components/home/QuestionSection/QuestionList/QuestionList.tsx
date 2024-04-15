'use client';

import Button from '@/components/common/Button/Button';
import styles from './QuestionList.module.css';
import DropArrowIcon from '/public/icons/drop-arrow.svg';
import { useState } from 'react';
import { inter } from '@/utils/fonts';
import { QuestItem, questItems } from './questionItems';
const QuestionList = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleActiveItem = (title: string) => {
    setActiveItem(prevActiveItem => (prevActiveItem === title ? null : title));
  };

  const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const teamSection = document.getElementById('contact-us-section');
    teamSection && teamSection.scrollIntoView({ behavior: 'smooth' });
  };

  const renderListItems = (items: QuestItem[]) =>
    items.map(({ text, title }) => (
      <li
        onClick={() => toggleActiveItem(title)}
        key={title}
        className={`${styles.questItem} ${activeItem === title ? styles.open : ''}`}
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
              className={`${styles.toggleIcon} ${activeItem === title ? styles.visible : ''}`}
            />
          </Button>
        </div>
        <div
          className={`${styles.questTextWrap} ${activeItem === title ? styles.visible : styles.hidden}`}
        >
          <p className={`${styles.questText} ${inter.className}`}>{text}</p>
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

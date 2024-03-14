'use client';

import Button from '@/components/common/Button/Button';
import styles from './QuestionList.module.css';
import DropArrowIcon from '/public/icons/drop-arrow.svg';
import { useState } from 'react';
import { inter } from '@/utils/fonts';

type QuestItem = {
  title: string;
  text: string;
};
const QuestionList = () => {
  const questItems: QuestItem[] = [
    {
      title:
        'Wie viele Module sind für eine vollständige Autonomie erforderlich?',
      text: 'Die Anzahl der Module, die für eine autonome Stromversorgung nur durch Sonnenenergie nötig sind, hängt in erster Linie von deinem persönlichen Verbrauch ab. Des Weiteren ist auch die zur Verfügung stehende Größe deines Daches ein zu berücksichtigender Faktor.Möchtest du erfahren, wie viele Module für deinen konkreten Fall nötig sind, um autonom Strom zu erzeugen? Kontaktiere uns – wir erstellen dir gern einen auf deine Bedürfnisse zugeschnittenen Plan.',
    },
    {
      title: 'Wird der Einbau von PV-Anlagen staatlich gefördert?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nemo ut aliquam aliquid a numquam assumenda cupiditate dolorum sit hic vero dolorem, consequuntur temporibus illo enim quisquam! Repellendus est accusantium aliquam maxime culpa alias illo!',
    },
    {
      title:
        'Gibt es Folgekosten wie etwa für Wartung und Reparatur der Anlage?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nemo ut aliquam aliquid a numquam assumenda cupiditate dolorum sit hic vero dolorem, consequuntur temporibus illo enim quisquam! Repellendus est accusantium aliquam maxime culpa alias illo!',
    },

    {
      title: 'Wie lange dauert es, bis sich eine PV-Anlage amortisieren?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nostrum aliquam consequatur rem dolores quam ut, expedita alias mollitia dolore saepe quod facilis aspernatur nam itaque quae error cum quasi tempore, est ullam commodi molestias voluptas quaerat. Ad, aperiam saepe.',
    },
    {
      title: 'Worauf sollte ich beim Kauf von PV-Modulen achten?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sapiente, corrupti, veritatis ducimus maxime voluptate dolor tenetur nostrum earum nemo dolorem similique! Qui obcaecati nesciunt quis voluptate autem vel ea.',
    },
    {
      title:
        'Woher weiß ich, welche Art von PV-Modul für mich am besten geeignet ist?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reiciendis nisi animi inventore, eveniet et magnam atque sapiente dicta debitis molestiae rerum, dignissimos adipisci accusantium quas, voluptatem optio reprehenderit. Unde quisquam veritatis nulla, ex, dicta nisi illum quasi error laboriosam amet eius culpa earum ratione, vel doloremque iste obcaecati aliquam.',
    },
  ];

  const [isTextVisible, setIsTextVisible] = useState<null | number>(null);

  const toggleTextVisibility = (index: number) => {
    setIsTextVisible(isTextVisible === index ? null : index);
  };

  return (
    <ul className={styles.questList}>
      {questItems.map(({ text, title }, index) => (
        <li
          onClick={() => toggleTextVisibility(index)}
          key={title}
          className={`${styles.questItem} ${isTextVisible ? styles.open : ''}`}
        >
          <div className={styles.questTitleWrap}>
            <h3 className={`${styles.questTitle} ${inter.className}`}>
              {title}
            </h3>
            <Button
              handleClick={() => toggleTextVisibility(index)}
              type="button"
              className={styles.questToggleBtn}
            >
              <DropArrowIcon
                className={`${styles.toggleIcon} ${isTextVisible === index ? styles.visible : ''}`}
              />
            </Button>
          </div>
          <div
            className={`${styles.questTextWrap} ${isTextVisible === index ? styles.visible : ''}`}
          >
            <p className={`${styles.questText} ${inter.className}`}>{text}</p>
            <Button type="button" className={styles.questConsultBtn}>
              Kostenlose Beratung
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default QuestionList;

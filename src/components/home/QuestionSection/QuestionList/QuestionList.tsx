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
      text: 'Die Anzahl der Module, die für eine autonome Stromversorgung nur durch Sonnenenergie nötig sind, hängt in erster Linie von deinem persönlichen Verbrauch ab. Des Weiteren ist auch die zur Verfügung stehende Größe deines Daches ein zu berücksichtigender Faktor. Möchtest du erfahren, wie viele Module für deinen konkreten Fall nötig sind, um autonom Strom zu erzeugen? Kontaktiere uns – wir erstellen dir gern einen auf deine Bedürfnisse zugeschnittenen Plan.',
    },
    {
      title: 'Wird der Einbau von PV-Anlagen staatlich gefördert?',
      text: 'Ja! Mit dem Solarpaket I will die Bundesregierung den Ausbau von Photovoltaik-/Solaranlagen weiter beschleunigen. Deshalb hat sie die jährlichen Zubauziele noch einmal angehoben: Ab 2026 soll mehr als dreimal so viel Solarenergie zugebaut werden wie bisher. Bis 2030 sollen in Deutschland Solaranlagen mit einer elektrischen Gesamtleistung von 215.000 MW auf Dächern installiert und auf Freiflächen aufgestellt sein. Wenn du mehr über die konkreten Fördermöglichkeiten deiner Region erfahren willst, kontaktiere uns!',
    },
    {
      title:
        'Gibt es Folgekosten wie etwa für Wartung und Reparatur der Anlage?',
      text: 'Bei uns gibt es keine versteckten Kosten. Alle Kosten, die auf dich zukommen, erfährst du in unserem Kostenplan, den du unverbindlich vor der Auftragserteilung erhältst. Zudem sind unsere Anlagen so konzipiert, dass sie ohne Wartung auskommen. Einmal positioniert, produziert die Anlage ein Leben lang Strom.',
    },

    {
      title: 'Wie lange dauert es, bis sich eine PV-Anlage amortisieren?',
      text: 'Wie lange es dauert, bis sich eine PV-Anlage amortisiert, hängt von den Komponenten ab, für die du dich beim Kauf deiner PV-Anlage entschieden hast.Durchschnittlich dauert es 9-15 Jahre, bis sich deine PV-Anlage amortisiert. Mit Stromspeicher können es auch 7-13 Jahre sein – und kannst  danach noch mehr Stromkosten sparen! Kontaktiere uns, wenn du konkrete Zahlen zu deinem konkreten Fall wissen möchtest!',
    },
    {
      title: 'Worauf sollte ich beim Kauf von PV-Modulen achten?',
      text: 'Wichtig sind vor allem qualitativ hochwertige Produkte und ein Team aus Spezialisten, die diese Produkte sicher positionieren. Des Weiteren sind Amortisierungszeit, Anzahl der PV-Module und die Entscheidung für oder gegen einen Stromspeicher wichtig. Kontaktiere uns noch heute und unser Spezialisten-Team berät dich unverbindlich in allen Fragen, die du zu deiner künftigen PV-Anlage hast. Stelle auch gerne Vergleiche zu anderen PV-Anbietern an und entscheide dich nur für die WorkSET Energy GmbH, wenn du überzeugt davon bist, dass wir die beste Wahl für dich sind!',
    },
    {
      title:
        'Woher weiß ich, welche Art von PV-Modul für mich am besten geeignet ist?',
      text: 'Bei dieser Frage können dir unsere Spezialisten weiterhelfen. Kontaktiere uns für ein persönliches Beratungsgespräch und erfahre, welche Lösung für dich die beste ist!',
    },
  ];

  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleActiveItem = (title: string) => {
    setActiveItem(prevActiveItem => (prevActiveItem === title ? null : title));
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
            handleClick={e => e.stopPropagation()}
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

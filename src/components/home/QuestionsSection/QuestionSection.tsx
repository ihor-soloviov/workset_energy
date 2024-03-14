'use client';

import Button from '@/components/common/Button/Button';
import styles from './QuestionSection.module.css';
import { inter } from '@/utils/fonts';
import DropArrowIcon from '/public/icons/drop-arrow.svg';
import { useState } from 'react';
const QuestionSection = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <section className={styles.questSection}>
      <div className={styles.questContainer}>
        <h2 className={styles.questMainTitle}>Ist deine Frage hier dabei?</h2>
        <p className={`${styles.questMainText} ${inter.className}`}>
          Häufig gestellte Fragen von Kunden
        </p>
        <ul className={styles.questList}>
          <li className={styles.questItem}>
            <div className={styles.questTitleWrap}>
              <h3 className={`${styles.questTitle} ${inter.className}`}>
                Wie viele Module sind für eine vollständige Autonomie
                erforderlich?
              </h3>
              <Button
                handleClick={toggleTextVisibility}
                type="button"
                className={styles.questToggleBtn}
              >
                <DropArrowIcon
                  className={`${styles.toggleIcon} ${isTextVisible ? styles.visible : ''}`}
                />
              </Button>
            </div>
            <div
              className={`${styles.questTextWrap} ${isTextVisible ? styles.visible : ''}`}
            >
              <p className={`${styles.questText} ${inter.className}`}>
                Die Anzahl der Module, die für eine autonome Stromversorgung nur
                durch Sonnenenergie nötig sind, hängt in erster Linie von deinem
                persönlichen Verbrauch ab. Des Weiteren ist auch die zur
                Verfügung stehende Größe deines Daches ein zu berücksichtigender
                Faktor.Möchtest du erfahren, wie viele Module für deinen
                konkreten Fall nötig sind, um autonom Strom zu erzeugen?
                Kontaktiere uns – wir erstellen dir gern einen auf deine
                Bedürfnisse zugeschnittenen Plan.
              </p>
              <Button type="button" className={styles.questConsultBtn}>
                Kostenlose Beratung
              </Button>
            </div>
          </li>
          <li className={styles.questItem}>
            <div className={styles.questTitleWrap}>
              <h3 className={`${styles.questTitle} ${inter.className}`}>
                Wird der Einbau von PV-Anlagen staatlich gefördert?
              </h3>
              <Button
                handleClick={toggleTextVisibility}
                type="button"
                className={styles.questToggleBtn}
              >
                <DropArrowIcon
                  className={`${styles.toggleIcon} ${isTextVisible ? styles.visible : ''}`}
                />
              </Button>
            </div>
            <div
              className={`${styles.questTextWrap} ${isTextVisible ? styles.visible : ''}`}
            >
              <p className={`${styles.questText} ${inter.className}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae officiis, accusantium nulla accusamus suscipit odit,
                exercitationem eum eaque esse, tempora harum mollitia corrupti
                quis illo laborum minus vero reiciendis doloribus recusandae qui
                corporis aspernatur unde? Et alias fugit eligendi voluptates!
              </p>
              <Button type="button" className={styles.questConsultBtn}>
                Kostenlose Beratung
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default QuestionSection;

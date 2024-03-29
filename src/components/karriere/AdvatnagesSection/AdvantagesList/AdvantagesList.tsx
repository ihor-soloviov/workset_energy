import React from 'react';
import Button from '@/components/common/Button/Button';
import styles from './AdvantagesList.module.css';
import { inter } from '@/utils/fonts';
import AdvantagesFirstIcon from '/public/icons/advantages-1.svg';
import AdvantagesSecondIcon from '/public/icons/advantages-2.svg';
import AdvantagesThirdIcon from '/public/icons/advantages-3.svg';
import AdvantagesFourthIcon from '/public/icons/advantages-4.svg';
import AdvantagesFifthIcon from '/public/icons/advantages-5.svg';

import BtnArrowIcon from '/public/icons/small-product-arrow.svg';
type AdvantagesItem = {
  title: string;
  text: string;
  link: string;
  icon: React.ElementType;
};

export const advantagesItems: AdvantagesItem[] = [
  {
    link: '',
    text: 'Unsere Mitarbeiter entwickeln sich in der Branche der erneuerbaren Energien weiter und erwerben entsprechende Fähigkeiten und Kenntnisse',
    title: 'Berufliches Wachstum',
    icon: AdvantagesFirstIcon,
  },
  {
    link: '',
    text: 'Wir bieten Schulungen im Bereich Photovoltaik und Zertifizierungen an, damit unsere Mitarbeiter immer auf dem neuesten Stand der Technik sind',
    title: 'Ausbildung',
    icon: AdvantagesSecondIcon,
  },
  {
    link: '',
    text: 'Wir legen Wert auf die Vereinbarkeit von Beruf und Familie. Deshalb bieten wir unseren Mitarbeitern flexible Arbeitszeiten und Arbeitsbedingungen',
    title: 'Flexible Arbeitszeit',
    icon: AdvantagesThirdIcon,
  },
  {
    link: '',
    text: 'Wir schaffen ein inspirierendes und freundliches Umfeld, in dem jeder Mitarbeiter wertgeschätzt wird',
    title: 'Respekt',
    icon: AdvantagesFourthIcon,
  },
  {
    link: '',
    text: 'In unserem Unternehmen arbeitest du mit erfahrenen und engagierten Fachleuten zusammen',
    title: 'Professionelles Team',
    icon: AdvantagesFifthIcon,
  },
  {
    link: '',
    text: 'Schließe dich der Bewegung für nachhaltige Energie an und wende dich von den herkömmlichen Energiequellen ab.',
    title: 'Soziale Bedeutung',
    icon: AdvantagesFifthIcon,
  },
];

const AdvantagesList = () => {
  return (
    <ul className={`${styles.advantagesList} ${inter.className}`}>
      {advantagesItems.map(({ text, title, link, icon }) => (
        <li className={styles.advantagesItem} key={title}>
          <div className={styles.advantagesIconWrap}>
            {React.createElement(
              icon,
              {
                className: styles.advantagesIcon,
              },
              null,
            )}
          </div>
          <h3 className={styles.advantagesTitle}>{title}</h3>
          <p className={styles.advantagesText}>{text}</p>
          <Button className={styles.advantagesBtn} type="button">
            Mehr Info
            <BtnArrowIcon className={styles.advantagesBtnIcon} />
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default AdvantagesList;

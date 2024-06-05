import AdvantagesFirstIcon from '/public/icons/advantages-1.svg';
import AdvantagesSecondIcon from '/public/icons/advantages-2.svg';
import AdvantagesThirdIcon from '/public/icons/advantages-3.svg';
import AdvantagesFourthIcon from '/public/icons/advantages-4.svg';
import AdvantagesFifthIcon from '/public/icons/advantages-5.svg';
import AdvantagesSixIcon from '/public/icons/advantages-6.svg';

type AdvantagesItem = {
  title: string;
  text: string;
  link: string;
  icon: React.ElementType;
};

export const advantagesItems: AdvantagesItem[] = [
  {
    link: '',
    text: 'Unsere Mitarbeiter entwickeln sich im Bereich der erneuerbaren Energien weiter und erwerben relevante Fähigkeiten und Kenntnisse',
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
    icon: AdvantagesSixIcon,
  },
];

import AmenitiesFirstIcon from '/public/icons/amenities-1.svg';
import AmenitiesSecondIcon from '/public/icons/amenities-2.svg';
import AmenitiesThirdIcon from '/public/icons/amenities-3.svg';
import AmenitiesFourthIcon from '/public/icons/amenities-4.svg';

type AmenitiesItem = {
  title: string;
  text: string;
  link: string;
  icon: React.ElementType;
};

export const amenitiesItems: AmenitiesItem[] = [
  {
    link: '',
    text: 'Mit Menschen für Menschen, dank Menschen! Wir schätzen unsere Kunden und setzen alles daran, ihre Bedürfnisse zu verstehen und zu erfüllen',
    title: 'Kundenzentriertheit',
    icon: AmenitiesFirstIcon,
  },
  {
    link: '',
    text: 'Kundenwünsche sind unsere Verantwortung. Wir legen großen Wert darauf, die individuellen Bedürfnisse unserer Kunden genau zu verstehen',
    title: 'Personalisierung',
    icon: AmenitiesSecondIcon,
  },
  {
    link: '',
    text: 'Unternehmenskultur auf Augenhöhe. Wir schätzen jeden Mitarbeiter, unabhängig von seiner Position',
    title: 'Fairness',
    icon: AmenitiesThirdIcon,
  },
  {
    link: '',
    text: 'Maximale Qualitätskontrolle, durch ausschließlich firmeneigene Mitarbeiter, ist für uns nicht nur ein Grundsatz, sondern auch ein Versprechen',
    title: 'Qualitätskontrolle',
    icon: AmenitiesFourthIcon,
  },
];

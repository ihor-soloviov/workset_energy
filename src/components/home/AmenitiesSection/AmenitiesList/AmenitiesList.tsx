import Button from '@/components/common/Button/Button';
import styles from './AmenitiesList.module.css';
import { inter } from '@/utils/fonts';
import AmenitiesFirstIcon from '/public/icons/amenities-1.svg';
import AmenitiesSecondIcon from '/public/icons/amenities-2.svg';
import AmenitiesThirdIcon from '/public/icons/amenities-3.svg';
import AmenitiesFourthIcon from '/public/icons/amenities-4.svg';
import BtnArrowIcon from '/public/icons/small-product-arrow.svg';
type AmenitiesItem = {
  title: string;
  text: string;
  link: string;
};

export const amenitiesItems: AmenitiesItem[] = [
  {
    link: '',
    text: 'Mit Menschen für Menschen, dank Menschen! Wir schätzen unsere Kunden und setzen alles daran, ihre Bedürfnisse zu verstehen und zu erfüllen',
    title: 'Kundenzentriertheit',
  },
  {
    link: '',
    text: 'Kundenwünsche sind unsere Verantwortung. Wir legen großen Wert darauf, die individuellen Bedürfnisse unserer Kunden genau zu verstehen',
    title: 'Personalisierung',
  },
  {
    link: '',
    text: 'Unternehmenskultur auf Augenhöhe. Wir schätzen jeden Mitarbeiter, unabhängig von seiner Position',
    title: 'Fairness',
  },
  {
    link: '',
    text: 'Maximale Qualitätskontrolle, durch ausschließlich firmeneigene Mitarbeiter, ist für uns nicht nur ein Grundsatz, sondern auch ein Versprechen',
    title: 'Qualitätskontrolle',
  },
];

const AmenitiesList = () => {
  const currentIcon = (title: string) => {
    switch (title) {
      case 'Kundenzentriertheit':
        return <AmenitiesFirstIcon className={styles.amenitiesIcon} />;
      case 'Personalisierung':
        return <AmenitiesSecondIcon className={styles.amenitiesIcon} />;
      case 'Fairness':
        return <AmenitiesThirdIcon className={styles.amenitiesIcon} />;
      case 'Qualitätskontrolle':
        return <AmenitiesFourthIcon className={styles.amenitiesIcon} />;
      default:
        return;
    }
  };

  return (
    <ul className={styles.amenitiesList}>
      {amenitiesItems.map(({ text, title, link }) => (
        <li className={styles.amenitiesItem} key={title}>
          <div className={styles.amenitiesIconWrap}>{currentIcon(title)}</div>
          <h3 className={styles.amenitiesTitle}>{title}</h3>
          <p className={`${styles.amenitiesText} ${inter.className}`}>{text}</p>
          <Button className={styles.amenitiesBtn} type="button">
            Mehr Info
            <BtnArrowIcon className={styles.amenitiesBtnIcon} />
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default AmenitiesList;

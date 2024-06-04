import styles from './HomeHeroList.module.css';
import CheckIcon from '/public/icons/check-circle-white.svg';
import { inter } from '@/utils/fonts';

const HomeHeroList = () => {
  const homeHeroItems = ['0% Risiko', '0% Anzahlung', '100% Naturstrom'];
  return (
    <ul className={styles.heroList}>
      {homeHeroItems.map((text, index) => (
        <li className={styles.heroItem} key={index}>
          <CheckIcon className={styles.heroIcon} />{' '}
          <p className={`${styles.heroText} ${inter.className}`}>{text}</p>
        </li>
      ))}
    </ul>
  );
};

export default HomeHeroList;

import { ImpressumItems } from './ImpressumItems';
import styles from './ImpressumList.module.css';
import { inter } from '@/utils/fonts';

const ImpressumList = () => {
  return (
    <ul className={styles.impressiumMainList}>
      {ImpressumItems.map(({ title, className, textList }) => (
        <li
          className={`${styles.impressiumMainItem} ${className ? styles[className] : ''}`}
          key={title}
        >
          <h3
            className={`${styles.impressiumTitle} ${className ? styles[className] : ''}`}
          >
            {title}
          </h3>
          <ul
            className={`${styles.impressiumList} ${className ? styles[className] : ''}  ${inter.className}`}
          >
            {textList?.map((text, index) => (
              <li className={styles.impressiumItem} key={index}>
                <p className={styles.impressiumText}>{text}</p>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default ImpressumList;

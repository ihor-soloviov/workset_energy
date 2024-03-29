import styles from './AdvantagesSection.module.css';
import { inter } from '@/utils/fonts';

import AdvantagesList from './AdvantagesList/AdvantagesList';

const AdvantagesSection = () => {
  return (
    <section className={styles.advantagesSection}>
      <div className={styles.advantagesContainer}>
        <h2 className={styles.advantagesMainTitle}>
          Warum du mit uns arbeiten solltest
        </h2>
        <p className={`${styles.advantagesMainText} ${inter.className}`}>
          Bei WorkSET Energy sind wir immer auf der Suche nach neuen Talenten
          und möchten leidenschaftliche, motivierte und erfahrene Fachleute
          kennenlernen
        </p>
        <AdvantagesList />
      </div>
    </section>
  );
};

export default AdvantagesSection;

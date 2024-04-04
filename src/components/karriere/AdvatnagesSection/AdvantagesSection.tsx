import styles from './AdvantagesSection.module.css';
import { inter } from '@/utils/fonts';

import AdvantagesList from './AdvantagesList/AdvantagesList';
import RecycleTextWrap from '@/components/common/RecycleTextWrap/RecycleTextWrap';

const AdvantagesSection = () => {
  return (
    <section className={styles.advantagesSection}>
      <div className={styles.advantagesContainer}>
        <RecycleTextWrap
          title="Warum du mit uns arbeiten solltest"
          titleClass={styles.advantagesMainTitle}
          text="Bei WorkSET Energy sind wir immer auf der Suche nach neuen Talenten
          und möchten leidenschaftliche, motivierte und erfahrene Fachleute
          kennenlernen"
          textClass={`${styles.advantagesMainText} ${inter.className}`}
        />
        <AdvantagesList />
      </div>
    </section>
  );
};

export default AdvantagesSection;

import AmenitiesList from './AmenitiesList/AmenitiesList';
import styles from './AmenitiesSection.module.css';
import RecycleTextWrap from '@/components/common/RecycleTextWrap/RecycleTextWrap';
import Link from 'next/link';

const AmenitiesSection = () => {
  return (
    <section className={styles.amenitiesSection}>
      <div className={styles.amenitiesContainer}>
        <RecycleTextWrap
          title="Warum WorkSET Energy?"
          titleClass={styles.amenitiesMainTitle}
        />

        <AmenitiesList />
        <Link href="/#kontact" className={styles.amenitiesMainLink}>
          Zum Angebot
        </Link>
      </div>
    </section>
  );
};

export default AmenitiesSection;

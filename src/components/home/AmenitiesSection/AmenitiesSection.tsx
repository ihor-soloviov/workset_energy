import dynamic from 'next/dynamic';

const AmenitiesList = dynamic(() => import('./AmenitiesList/AmenitiesList'), {
  ssr: false,
});

const RecycleTextWrap = dynamic(
  () => import('@/components/common/RecycleTextWrap/RecycleTextWrap'),
  {
    ssr: false,
  },
);
import Link from 'next/link';
import styles from './AmenitiesSection.module.css';

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

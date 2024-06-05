import Link from 'next/link';
import styles from './JobsHero.module.css';
import Button from '@/components/common/Button/Button';
import LinkArrowIcon from '/public/icons/jobs-arrow.svg';
import { inter } from '@/utils/fonts';
import { scrollToSection } from '@/utils/scroll';
const JobsHero = () => {
  return (
    <section className={styles.jobsHeroSection}>
      <div className={styles.jobsHeroContainer}>
        <Link
          className={`${styles.jobsHeroLink} ${inter.className}`}
          href="/karriere"
        >
          <LinkArrowIcon className={styles.jobsHeroIcon} />
          Zu allen offenen Stellen
        </Link>
        <h2 className={styles.jobsHeroTitle}>
          Lenke deine Karriere in die richtige Richtung
        </h2>
        <p className={`${styles.jobsHeroText} ${inter.className}`}>
          Arbeiten wir zusammen, um eine nachhaltige Zukunft zu schaffen und den
          Wandel um uns herum positiv zu beeinflussen
        </p>
        <Button
          handleClick={() => scrollToSection('jobs')}
          className={styles.jobsHeroBtn}
          type="button"
        >
          Stellenangebote
        </Button>
      </div>
    </section>
  );
};

export default JobsHero;

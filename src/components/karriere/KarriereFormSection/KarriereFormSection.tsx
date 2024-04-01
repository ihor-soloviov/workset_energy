import KarriereForm from './KarriereForm/KarriereForm';
import styles from './KarriereFormSection.module.css';
import { inter } from '@/utils/fonts';

const KarriereFormSection = () => {
  return (
    <section className={styles.karriereFormSection}>
      <div className={styles.karriereFormContainer}>
        <h2 className={styles.karriereFormTitle}>
          Sie haben keine passende Stelle gefunden?
        </h2>
        <p className={`${styles.karriereFormText} ${inter.className}`}>
          Schicken Sie uns Ihren Lebenslauf, vielleicht suchen wir ja nach
          Ihnen!
        </p>
        <KarriereForm />
      </div>
    </section>
  );
};

export default KarriereFormSection;

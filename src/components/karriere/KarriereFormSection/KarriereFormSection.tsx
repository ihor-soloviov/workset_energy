import RecycleTextWrap from '@/components/common/RecycleTextWrap/RecycleTextWrap';
import KarriereForm from './KarriereForm/KarriereForm';
import styles from './KarriereFormSection.module.css';
import { inter } from '@/utils/fonts';

const KarriereFormSection = () => {
  return (
    <section id="karriere-form" className={styles.karriereFormSection}>
      <div className={styles.karriereFormContainer}>
        <RecycleTextWrap
          title="Sie haben keine passende Stelle gefunden?"
          titleClass={styles.karriereFormTitle}
          text=" Schicken Sie uns Ihren Lebenslauf, vielleicht suchen wir ja nach
          Ihnen!"
          textClass={`${styles.karriereFormText} ${inter.className}`}
        />
        <KarriereForm />
      </div>
    </section>
  );
};

export default KarriereFormSection;

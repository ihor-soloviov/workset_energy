import Button from '@/components/common/Button/Button';
import styles from './LeadStepSix.module.css';
import LeadStepSixForm from './LeadStepSixForm/LeadStepSixForm';

const LeadStepSix = () => {
  return (
    <div className={styles.stepSixWrap}>
      <h2 className={styles.stepSixTitle}>Kontaktdaten</h2>
      <h2 className={styles.stepSixText}>
        Bitte alle Felder ausfüllen, damit wir dich erreichen können.
      </h2>
      <LeadStepSixForm />
    </div>
  );
};

export default LeadStepSix;

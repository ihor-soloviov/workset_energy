import Button from '@/components/common/Button/Button';
import styles from './LeadStepFive.module.css';
import LeadStepFiveList from './LeadStepFiveList/LeadStepFiveList';

const LeadStepFive = () => {
  return (
    <div className={styles.stepFiveWrap}>
      <h2 className={styles.stepFiveTitle}>
        Wie groß planst du deine PV-Anlage?
      </h2>
      <LeadStepFiveList />
      <div className={styles.stepFiveBtnWrap}>
        <Button type="button" className={styles.stepFiveBtn}>
          Züruck
        </Button>
        <Button type="button" className={styles.stepFiveBtn}>
          Weiter
        </Button>
      </div>
    </div>
  );
};

export default LeadStepFive;

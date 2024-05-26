import Button from '@/components/common/Button/Button';
import styles from './LeadStepThree.module.css';
import LeadStepThreeList from './LeadStepThreeList/LeadStepThreeList';

const LeadStepThree = () => {
  return (
    <div className={styles.stepThreeWrap}>
      <h2 className={styles.stepThreeTitle}>Umsetzung</h2>
      <p className={styles.stepThreeText}>
        Wann wünschst du deine PV-Anlage zu realisieren?
      </p>
      <LeadStepThreeList />
      <div className={styles.stepThreeBtnWrap}>
        <Button type="button" className={styles.stepThreeBtn}>
          Züruck
        </Button>
        <Button type="button" className={styles.stepThreeBtn}>
          Weiter
        </Button>
      </div>
    </div>
  );
};

export default LeadStepThree;

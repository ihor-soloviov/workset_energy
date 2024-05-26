import Button from '@/components/common/Button/Button';
import styles from './LeadStepFour.module.css';
import LeadStepFourList from './LeadStepFourList/LeadStepFourList';

const LeadStepFour = () => {
  return (
    <div className={styles.stepFourWrap}>
      <h2 className={styles.stepFourTitle}>
        Wann bist du am besten erreichbar?
      </h2>
      <LeadStepFourList />
      <div className={styles.stepFourBtnWrap}>
        <Button type="button" className={styles.stepFourBtn}>
          Züruck
        </Button>
        <Button type="button" className={styles.stepFourBtn}>
          Weiter
        </Button>
      </div>
    </div>
  );
};

export default LeadStepFour;

import Button from '@/components/common/Button/Button';
import styles from './LeadStepTwo.module.css';
import LeadStepTwoList from './LeadStepTwoList/LeadStepTwoList';
import { LeadStepProps } from '../../types';

const LeadStepTwo = ({
  formData,
  setFormData,
  step,
  setStep,
}: LeadStepProps) => {
  return (
    <div className={styles.stepTwoWrap}>
      <h2 className={styles.stepTwoTitle}>
        Welche Art der Beratung wünschst du?
      </h2>
      <p className={styles.stepTwoText}>Wir wollen dich passgenau beraten!</p>
      <LeadStepTwoList />
      <div className={styles.stepTwoBtnWrap}>
        <Button type="button" className={styles.stepTwoBtn}>
          Züruck
        </Button>
        <Button type="button" className={styles.stepTwoBtn}>
          Weiter
        </Button>
      </div>
    </div>
  );
};

export default LeadStepTwo;

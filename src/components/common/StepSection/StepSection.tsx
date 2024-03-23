import Container from '@/components/common/Container/Container';
import StepList from './StepList/StepList';
import styles from './StepSection.module.css';

const StepSection = () => {
  return (
    <section className={styles.stepSection}>
      <Container>
        <h2 className={styles.stepMainTitle}>
          5 Schritte zu deiner
          <br className={styles.stepBr} /> PV-Anlage
        </h2>

        <StepList />
      </Container>
    </section>
  );
};

export default StepSection;

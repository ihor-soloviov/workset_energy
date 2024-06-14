import Container from '@/components/common/Container/Container';
import dynamic from 'next/dynamic';

const StepList = dynamic(() => import('./StepList/StepList'), {
  ssr: false,
});
import styles from './StepSection.module.css';

const StepSection = () => (
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

export default StepSection;

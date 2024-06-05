import ImpressumList from './ImpressumList/ImpressumList';
import styles from './ImpressumSection.module.css';
import Container from '@/components/common/Container/Container';

const ImpressumSection = () => {
  return (
    <section className={styles.impressumSection}>
      <Container>
        <ImpressumList />
      </Container>
    </section>
  );
};

export default ImpressumSection;

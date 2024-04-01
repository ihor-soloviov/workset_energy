import Container from '@/components/common/Container/Container';
import styles from './JobSection.module.css';
import JobInfo from './JobInfo/JobInfo';
import JobForm from './JobForm/JobForm';

const JobSection = () => {
  return (
    <section className={styles.jobSection}>
      <Container>
        <JobInfo />
        {/* <JobForm /> */}
      </Container>
    </section>
  );
};

export default JobSection;

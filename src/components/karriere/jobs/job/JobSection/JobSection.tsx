import Container from '@/components/common/Container/Container';
import styles from './JobSection.module.css';
import JobInfo from './JobInfo/JobInfo';
import JobForm from './JobForm/JobForm';
import JobList from './JobList/JobList';
const JobSection = () => {
  return (
    <section className={styles.jobSection}>
      <div className={styles.jobContainer}>
        <JobInfo />
        <JobList />
        <JobForm />
      </div>
    </section>
  );
};

export default JobSection;

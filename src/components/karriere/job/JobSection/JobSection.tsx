import styles from './JobSection.module.css';
import JobInfo from './JobInfo/JobInfo';
import JobForm from './JobForm/JobForm';
import JobList from './JobList/JobList';
import { KarrierJobItem } from '@/types/infoTypes';

type JobSectionProps = {
  response: KarrierJobItem | null;
};

const JobSection = ({ response }: JobSectionProps) => {
  return (
    <section id="job" className={styles.jobSection}>
      <div className={styles.jobContainer}>
        <JobInfo response={response} />
        <JobList response={response} />
        <JobForm />
      </div>
    </section>
  );
};

export default JobSection;

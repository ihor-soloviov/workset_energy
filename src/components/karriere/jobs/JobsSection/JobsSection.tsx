import JobsList from './JobsList/JobsList';
import styles from './JobsSection.module.css';
import React from 'react';
import JobsSelectForm from './JobsSelectForm/JobsSelectForm';
import type { KarrierJobItems } from '@/types/infoTypes';

type JobsSectionProps = {
  response: KarrierJobItems | null;
};

const JobsSection = ({ response }: JobsSectionProps) => {
  return (
    <section className={styles.jobsSection}>
      <div className={styles.jobsContainer}>
        <JobsSelectForm />
        <JobsList response={response} />
      </div>
    </section>
  );
};

export default JobsSection;

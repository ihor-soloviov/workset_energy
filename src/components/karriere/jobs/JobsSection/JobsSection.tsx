import JobsList from './JobsList/JobsList';
import styles from './JobsSection.module.css';
import React from 'react';

import JobsSelect from './JobsSelect/JobsSelect';

const JobsSection = () => {
  return (
    <section className={styles.jobsSection}>
      <div className={styles.jobsContainer}>
        <JobsSelect />
        <JobsList />
      </div>
    </section>
  );
};

export default JobsSection;

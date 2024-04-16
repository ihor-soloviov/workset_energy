'use client';
import JobsList from './JobsList/JobsList';
import styles from './JobsSection.module.css';
import React, { useState } from 'react';
import JobsSelectForm from './JobsSelectForm/JobsSelectForm';
import type { KarrierJobItems } from '@/types/infoTypes';

type JobsSectionProps = {
  response: KarrierJobItems | null;
  isLoading: boolean;
};

const JobsSection = ({ response, isLoading }: JobsSectionProps) => {
  const [selectValues, setSelectValues] = useState({
    role: '',
    location: '',
    contract: '',
  });

  const handleSelectChange = (fieldName: string, value: string) => {
    setSelectValues(prevSelectValues => ({
      ...prevSelectValues,
      [fieldName]: value,
    }));
  };
  return (
    <section className={styles.jobsSection}>
      <div className={styles.jobsContainer}>
        <JobsSelectForm
          selectValues={selectValues}
          handleSelectChange={handleSelectChange}
        />
        <JobsList
          isLoading={isLoading}
          response={response}
          selectValues={selectValues}
        />
      </div>
    </section>
  );
};

export default JobsSection;

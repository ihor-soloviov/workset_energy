import JobHero from '@/components/karriere/jobs/job/JobHero/JobHero';
import JobSection from '@/components/karriere/jobs/job/JobSection/JobSection';
import React from 'react';

interface Props {
  params: {
    id: string;
  };
}

const Job = ({ params: { id } }: Props) => {
  return (
    <>
      <JobHero />
      <JobSection />
    </>
  );
};

export default Job;

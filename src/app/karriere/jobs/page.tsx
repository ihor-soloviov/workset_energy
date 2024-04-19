/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useEffect, useState } from 'react';
import JobsHero from '@/components/karriere/jobs/JobsHero/JobsHero';
import JobsSection from '@/components/karriere/jobs/JobsSection/JobsSection';
import KarriereFormSection from '@/components/karriere/KarriereFormSection/KarriereFormSection';

import type { KarrierJobItems } from '@/types/infoTypes';
import { fetchJobsData } from '@/utils/api';
const Jobs = () => {
  const [response, setResponse] = useState<KarrierJobItems | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDataAndUpdateState = async () => {
      setIsLoading(true);
      const response = await fetchJobsData();
      setResponse(response);
      setIsLoading(false);
    };

    fetchDataAndUpdateState();
  }, []);

  return (
    <>
      <h1>Jobs</h1>
      <JobsHero />
      <JobsSection isLoading={isLoading} response={response} />
      <KarriereFormSection />
    </>
  );
};

export default Jobs;

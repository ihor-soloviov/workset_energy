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
  console.log(response);

  useEffect(() => {
    const fetchDataAndUpdateState = async () => {
      const response = await fetchJobsData();
      setResponse(response);
    };

    fetchDataAndUpdateState();
  }, []);

  return (
    <>
      <JobsHero />
      <JobsSection response={response} />
      <KarriereFormSection />
    </>
  );
};

export default Jobs;

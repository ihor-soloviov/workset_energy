'use client';
import React, { useEffect, useState } from 'react';
import JobsHero from '@/components/karriere/jobs/JobsHero/JobsHero';
import JobsSection from '@/components/karriere/jobs/JobsSection/JobsSection';
import KarriereFormSection from '@/components/karriere/KarriereFormSection/KarriereFormSection';
import axios from 'axios';
import type { KarrierJobItems } from '@/types/infoTypes';
const Jobs = () => {
  const [response, setResponse] = useState<KarrierJobItems | null>(null);
  console.log(response);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://api.work-set.eu/api/jobs');
        setResponse(data);

        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
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

'use client';

import JobHero from '@/components/karriere/job/JobHero/JobHero';
import JobSection from '@/components/karriere/job/JobSection/JobSection';
import React, { useEffect, useState } from 'react';
import type { KarrierJobItem } from '@/types/infoTypes';
import { fetchJobData } from '@/utils/api';
interface Props {
  params: {
    id: string;
  };
}

const Job = ({ params: { id } }: Props) => {
  const [response, setResponse] = useState<KarrierJobItem | null>(null);
  console.log(response);

  useEffect(() => {
    const fetchDataAndUpdateState = async () => {
      const response = await fetchJobData(id);
      setResponse(response);
    };

    fetchDataAndUpdateState();
  }, [id]);

  return (
    <>
      <JobHero response={response} />
      <JobSection response={response} />
    </>
  );
};

export default Job;

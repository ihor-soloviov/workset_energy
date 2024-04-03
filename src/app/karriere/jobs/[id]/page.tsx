'use client';

import JobHero from '@/components/karriere/jobs/job/JobHero/JobHero';
import JobSection from '@/components/karriere/jobs/job/JobSection/JobSection';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { KarrierJobItem } from '@/types/infoTypes';
interface Props {
  params: {
    id: string;
  };
}

const Job = ({ params: { id } }: Props) => {
  const [response, setResponse] = useState<KarrierJobItem | null>(null);
  console.log(response);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://api.work-set.eu/api/jobs/${id}`,
        );
        setResponse(data);

        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <>
      <JobHero response={response} />
      <JobSection response={response} />
    </>
  );
};

export default Job;

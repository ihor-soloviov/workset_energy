/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import styles from './page.module.css';
import JobHero from '@/components/karriere/job/JobHero/JobHero';
import JobSection from '@/components/karriere/job/JobSection/JobSection';
import React, { useEffect, useState } from 'react';
import type { KarrierJobItem } from '@/types/infoTypes';
import { fetchJobData } from '@/utils/api';
import { ThreeDots } from 'react-loader-spinner';
import Link from 'next/link';
import LinkArrowIcon from '/public/icons/jobs-arrow.svg';
import { useModalStore } from '@/store/hero-store';

interface Props {
  params: {
    id: string;
  };
}

const Job = ({ params: { id } }: Props) => {
  const [response, setResponse] = useState<KarrierJobItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  // //console.log(response);

  useEffect(() => {
    const fetchDataAndUpdateState = async () => {
      setIsLoading(true);
      const response = await fetchJobData(id);
      //console.log(response);

      response ? setResponse(response) : setError(true);
      setIsLoading(false);
    };

    fetchDataAndUpdateState();
  }, [id]);

  // useEffect(() => {
  //   error
  // }, [error]);

  return (
    <>
      {isLoading && (
        <div className={styles.loaderWrap}>
          <ThreeDots
            visible={true}
            height="50"
            width="50"
            color="#f32c40"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass={styles.loader}
          />
        </div>
      )}
      {!isLoading && !error && (
        <>
          <JobHero response={response} />
          <JobSection response={response} />
        </>
      )}
      {error && (
        <div className={styles.jobErrorWrap}>
          <div className={styles.jobTextWrap}>
            <Link className={styles.jobHeroLink} href="/karriere/jobs">
              <LinkArrowIcon className={styles.jobHeroIcon} />
              Zu allen offenen Stellen
            </Link>
            <p className={styles.jobErrorText}>No results</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Job;

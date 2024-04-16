import Button from '@/components/common/Button/Button';
import styles from './JobsList.module.css';
import Link from 'next/link';
import { inter } from '@/utils/fonts';
import type { KarrierJobItems, SelectValues } from '@/types/infoTypes';
import { filteredJobs } from '@/utils/filteredJobs';

type JobsListProps = {
  response: KarrierJobItems | null;
  selectValues: SelectValues;
  isLoading: boolean;
};

const JobsList = ({ response, selectValues, isLoading }: JobsListProps) => {
  const filteredJobsData = filteredJobs(response, selectValues);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <ul className={styles.jobsList}>
        {!isLoading && filteredJobsData && filteredJobsData.length !== 0 ? (
          filteredJobsData.map(({ id, attributes }, index) => {
            const { job_title, job_type, job_message } = attributes;
            return (
              <li className={styles.jobsItem} key={index}>
                <div className={styles.jobsTopWrap}>
                  <h3 className={styles.jobsTitle}>{job_title}</h3>
                  <div className={styles.jobsTimeWrap}>
                    <p className={styles.jobsTimeType}>{job_type}</p>
                  </div>
                </div>
                <div className={styles.jobsWrap}>
                  <p className={`${styles.jobsText} ${inter.className}`}>
                    {job_message.length > 138
                      ? `${job_message.slice(0, 199)}...`
                      : job_message}
                  </p>
                  <p className={`${styles.jobsLocation} ${inter.className}`}>
                    {attributes.job_location}
                  </p>
                </div>
                <div className={styles.jobsBottomWrap}>
                  <Link
                    id={id.toString()}
                    href={`/karriere/jobs/${id}`}
                    className={styles.jobsLink}
                  >
                    Mehr Info
                  </Link>
                  <Button type="button" className={styles.jobsBtn}>
                    Eine Anfrage stellen
                  </Button>
                </div>
              </li>
            );
          })
        ) : (
          <p className={styles.jobsErrorText}>No results</p>
        )}
      </ul>
    </>
  );
};

export default JobsList;

import Button from '@/components/common/Button/Button';
import styles from './JobsList.module.css';
import Link from 'next/link';
import { inter } from '@/utils/fonts';
import type { KarrierJobItems, SelectValues } from '@/types/infoTypes';
import { filteredJobs } from '@/utils/filteredJobs';
import { ThreeDots } from 'react-loader-spinner';
import { scrollToSection } from '@/utils/scroll';
type JobsListProps = {
  response: KarrierJobItems | null;
  selectValues: SelectValues;
  isLoading: boolean;
};

const JobsList = ({ response, selectValues, isLoading }: JobsListProps) => {
  const filteredJobsData = filteredJobs(response, selectValues);

  return (
    <>
      {isLoading && (
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
      )}
      <ul className={styles.jobsList}>
        {filteredJobsData &&
          filteredJobsData.length !== 0 &&
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
                    {job_message.length > 200
                      ? `${job_message.slice(0, 200)}...`
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
                  <Button
                    handleClick={() => scrollToSection('karriere-form')}
                    type="button"
                    className={styles.jobsBtn}
                  >
                    Eine Anfrage stellen
                  </Button>
                </div>
              </li>
            );
          })}
        {!isLoading && filteredJobsData?.length === 0 && (
          <p className={styles.jobsErrorText}>No results</p>
        )}
      </ul>
    </>
  );
};

export default JobsList;

import Button from '@/components/common/Button/Button';
import styles from './JobsList.module.css';
import Link from 'next/link';
import { inter } from '@/utils/fonts';
import type { KarrierJobItems } from '@/types/infoTypes';

type JobsListProps = {
  response: KarrierJobItems | null;
};

const JobsList = ({ response }: JobsListProps) => {
  return (
    <ul className={styles.jobsList}>
      {response &&
        response.data.length !== 0 &&
        response.data.map(({ id, attributes }, index) => (
          <li className={styles.jobsItem} key={index}>
            <div className={styles.jobsTopWrap}>
              <h3 className={styles.jobsTitle}>{attributes.job_title}</h3>
              <div className={styles.jobsTimeWrap}>
                <p className={styles.jobsTimeType}>{attributes.job_type}</p>
              </div>
            </div>
            <div className={styles.jobsWrap}>
              <p className={`${styles.jobsText} ${inter.className}`}>
                {attributes.job_message.length > 138
                  ? `${attributes.job_message.slice(0, 199)}...`
                  : attributes.job_message}
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
        ))}
    </ul>
  );
};

export default JobsList;

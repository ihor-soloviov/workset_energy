import Button from '@/components/common/Button/Button';
import styles from './JobsList.module.css';
import { jobItems } from './jobsItem';
import Link from 'next/link';
import { inter } from '@/utils/fonts';

const JobsList = () => {
  return (
    <ul className={styles.jobsList}>
      {jobItems.map(({ text, title, timeType, location, id }, index) => (
        <li className={styles.jobsItem} key={index}>
          <div className={styles.jobsTopWrap}>
            <h3 className={styles.jobsTitle}>{title}</h3>
            <div className={styles.jobsTimeWrap}>
              <p className={styles.jobsTimeType}>{timeType}</p>
            </div>
          </div>
          <div className={styles.jobsWrap}>
            <p className={`${styles.jobsText} ${inter.className}`}>{text}</p>
            <p className={`${styles.jobsLocation} ${inter.className}`}>
              {location}
            </p>
          </div>
          <div className={styles.jobsBottomWrap}>
            <Link
              id={title}
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

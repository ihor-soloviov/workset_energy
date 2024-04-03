import styles from './JobList.module.css';
import React from 'react';
import { JobListItems } from './jobItems';
import { inter } from '@/utils/fonts';
import { KarrierJobItem } from '@/types/infoTypes';

type JobListProps = {
  response: KarrierJobItem | null;
};

const JobList = ({ response }: JobListProps) => {
  function parseResponsibilitiesAndRequirements(data: string) {
    const sections = data.split('#');
    sections.shift();

    const parsedData = sections.map((section: string) => {
      const lines = section.trim().split('\n');
      const title = lines.shift();
      const points = lines.map(line => line.trim().replace(/^- /, ''));
      return { title, points };
    });

    return parsedData;
  }

  const renderList = (data: string | null) => (
    <ul className={styles.jobSubCategoryList}>
      {data &&
        parseResponsibilitiesAndRequirements(data).map(({ title, points }) => (
          <li className={styles.jobSubCategoryItem} key={title}>
            <h4 className={styles.jobSubCategoryTitle}>{title}</h4>
            <ul className={styles.jobPointList}>
              {points.map((point, index) => (
                <li className={styles.jobPointItem} key={index}>
                  <p className={`${styles.jobPointText} ${inter.className}`}>
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </li>
        ))}
    </ul>
  );

  const currentList = (title: string) => {
    switch (title) {
      case 'Stellenbeschreibung:':
        return (
          <p className={styles.jobDescription}>
            {response?.data.attributes.job_description}
          </p>
        );
      case 'Zuständigkeiten:':
        return renderList(
          response && response?.data.attributes.job_responsibilities,
        );
      case 'Anforderungen:':
        return renderList(
          response && response?.data.attributes.job_requirements,
        );
      default:
        return;
    }
  };

  return (
    <div className={styles.jobListWrap}>
      <h2 className={styles.jobTitle}>{response?.data.attributes.job_title}</h2>
      <ul className={styles.jobCategoryList}>
        {JobListItems.map(({ title }) => (
          <li
            className={`${styles.jobCategoryItem} ${inter.className} ${title === 'Stellenbeschreibung' ? styles.description : ''}`}
            key={title}
          >
            <h3 className={styles.jobCategoryTitle}>{title}</h3>

            {currentList(title)}
          </li>
        ))}
      </ul>
      <p className={`${styles.jobMessage} ${inter.className}`}>
        {response?.data.attributes.job_message.split('\n').slice(0, -1)}
        <span className={styles.jobMessageSpan}>
          {response?.data.attributes.job_message.split('\n').pop()}
        </span>
      </p>
    </div>
  );
};

export default JobList;

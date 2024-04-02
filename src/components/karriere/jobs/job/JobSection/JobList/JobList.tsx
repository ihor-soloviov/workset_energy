import styles from './JobList.module.css';
import React from 'react';
import { jobItem, JobListItems } from './jobItem';
import { inter } from '@/utils/fonts';
const JobList = () => {
  function parseResponsibilitiesAndRequirements(data: string) {
    const sections = data.split('#'); // Разделяем данные на разделы по символу #
    sections.shift(); // Удаляем первый пустой элемент, который появляется из-за разделителя в начале строки

    const parsedData = sections.map((section: string) => {
      const lines = section.trim().split('\n'); // Разделяем раздел на строки
      const title = lines.shift(); // Первая строка в разделе - это заголовок
      const subpoints = lines.map(line => line.trim().replace(/^- /, '')); // Остальные строки - это подпункты
      return { title, subpoints };
    });

    return parsedData;
  }

  const renderList = (data: string) => (
    <ul className={styles.jobSubCategoryList}>
      {parseResponsibilitiesAndRequirements(data).map(
        ({ title, subpoints }) => (
          <li className={styles.jobSubCategoryItem} key={title}>
            <h4 className={styles.jobSubCategoryTitle}>{title}</h4>
            <ul className={styles.jobPointList}>
              {subpoints.map((subpoint, index) => (
                <li className={styles.jobPointItem} key={index}>
                  <p className={`${styles.jobPointText} ${inter.className}`}>
                    {subpoint}
                  </p>
                </li>
              ))}
            </ul>
          </li>
        ),
      )}
    </ul>
  );

  const currentList = (title: string) => {
    switch (title) {
      case 'Stellenbeschreibung:':
        return <p className={styles.jobDescription}>{jobItem.description}</p>;
      case 'Zuständigkeiten:':
        return renderList(jobItem.responsibilities);
      case 'Anforderungen:':
        return renderList(jobItem.requirements);
      default:
        return;
    }
  };

  return (
    <div className={styles.jobListWrap}>
      <h2 className={styles.jobTitle}>{jobItem.title}</h2>
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
        {jobItem.message.split('\n').slice(0, -1)}
        <span className={styles.jobMessageSpan}>
          {jobItem.message.split('\n').pop()}
        </span>
      </p>
    </div>
  );
};

export default JobList;

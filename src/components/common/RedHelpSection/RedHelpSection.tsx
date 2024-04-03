import React from 'react';
import styles from './RedHelpSection.module.css';
import { items } from './items';
import RedHelpItem from './RedHelpItem/RedHelpItem';

const RedHelpSection = () => (
  <section className={styles.redHelpSection}>
    <div className={styles.redHelpWrap}>
      <div className={styles.redHelpHeader}>
        <h4 className={styles.title}>Wir sind immer bereit zu helfen</h4>
        <p className={styles.text}>
          Wir stehen dir jederzeit beratend zur Seite. Zögere nicht, uns zu
          kontaktieren!
        </p>
      </div>
      <ul className={styles.redHelpItems}>
        {items.map(item => (
          <RedHelpItem key={item.title} item={item} />
        ))}
      </ul>
    </div>
  </section>
);

export default RedHelpSection;

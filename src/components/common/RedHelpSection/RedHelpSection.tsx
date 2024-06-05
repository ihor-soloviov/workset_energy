import React from 'react';
import styles from './RedHelpSection.module.css';
import { items } from './items';
import RedHelpItem from './RedHelpItem/RedHelpItem';
import RecycleTextWrap from '../RecycleTextWrap/RecycleTextWrap';

const RedHelpSection = () => (
  <section className={styles.redHelpSection}>
    <div className={styles.redHelpWrap}>
      <div className={styles.redHelpHeader}>
        <RecycleTextWrap
          title="Wir sind immer bereit zu helfen"
          titleClass={styles.title}
          text="Wir stehen dir jederzeit beratend zur Seite. Zögere nicht, uns zu
          kontaktieren!"
          textClass={styles.text}
        />
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

import React from 'react';
import dynamic from 'next/dynamic';
import styles from './RedHelpSection.module.css';
import { items } from './items';
const RedHelpItem = dynamic(() => import('./RedHelpItem/RedHelpItem'), {
  ssr: false,
});

const RecycleTextWrap = dynamic(
  () => import('../RecycleTextWrap/RecycleTextWrap'),
  {
    ssr: false,
  },
);

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

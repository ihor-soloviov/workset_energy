'use client';
import React, { useState } from 'react';
import styles from './SwitcherSection.module.css';
import ToggleButton from '../ToggleButton/ToggleButton';
import Video from '@/components/common/Video/Video';

import { motion } from 'framer-motion';
import { fromBotAnimation } from '@/animations/animations';

const SwitcherSection = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => setIsDark(prev => !prev);
  return (
    <section
      className={`${styles.switcherSection} ${isDark ? styles.switcherSectionDark : ''}`}
    >
      <div className={styles.switcherContainer}>
        <div className={styles.switcherWrap}>
          <motion.article
            className={styles.switcherInfo}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0, once: true }}
            variants={fromBotAnimation}
          >
            <h4
              className={`${styles.switcherTitle} ${isDark ? styles.switcherTitleDark : ''}`}
            >
              Wie der Stromspeicher <br /> funktioniert
            </h4>
            <p
              className={`${styles.switcherArticle} ${isDark ? styles.switcherArticleDark : ''}`}
            >
              Tagsüber erzeugen Ihre Solarpaneele Energie, die aber oft nicht
              direkt verbraucht wird, weil Sie z.B. nicht zu Hause sind. Diese
              Energie wird daher in das Stromnetz zurückgespeist. Mit dem
              Stromspeicher von Soly erhöhen Sie Ihre Unabhängigkeit auf 60-80
              %. Ein Teil des Stroms, der sonst tagsüber ins Netz zurückgespeist
              würde, wird in einem Stromspeicher gespeichert. Von dort zapfen
              Sie am Abend einfach Ihren Strom ab.
            </p>
          </motion.article>
          <div
            className={`${styles.switcherAnim} ${isDark ? styles.switcherAnimDark : ''}`}
          >
            <Video isDark={isDark} />
            <ToggleButton toggleDarkMode={toggleDarkMode} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwitcherSection;

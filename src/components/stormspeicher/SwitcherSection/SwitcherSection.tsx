'use client';
import React, { useState } from 'react';
import styles from './SwitcherSection.module.css';
import ToggleButton from '../ToggleButton/ToggleButton';
import Video from '@/components/stormspeicher/Video/Video';
import { inter } from '@/utils/fonts';

const SwitcherSection = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => setIsDark(prev => !prev);
  return (
    <section
      className={`${styles.switcherSection} ${isDark ? styles.switcherSectionDark : ''}`}
    >
      <div className={styles.switcherContainer}>
        <div className={styles.switcherWrap}>
          <article className={styles.switcherInfo}>
            <h4
              className={`${styles.switcherTitle} ${isDark ? styles.switcherTitleDark : ''}`}
            >
              Wie wird der Strom <br /> gespeichert?
            </h4>
            <p
              className={`${styles.switcherArticle} ${isDark ? styles.switcherArticleDark : ''} ${inter.className}`}
            >
              Die Abbildung rechts zeigt dir, wie das funktioniert. Tagsüber
              produzieren deine Photovoltaikmodule Strom, der oft nicht sofort
              verbraucht wird, z. B. wenn du nicht zu Hause bist. Dann wird die
              gesamte Energie ins Netz zurückgespeist. Mit einem Stromspeicher
              kannst du jedoch deine Energieunabhängigkeit um bis zu 60-80 %
              erhöhen. Der Strom, den du sonst an das Stromnetz abgeben würdest,
              wird im Stromspeicher gesammelt und steht dir dann am Abend zur
              Verfügung
            </p>
          </article>

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

'use client';
import styles from './TeamSection.module.css';
import Container from '../Container/Container';
import TeamSlider from './TeamSlider/TeamSlider';
import TeamTextWrap from './TeamTextWrap/TeamTextWrap';
import TeamCarousel from './TeamCarousel/TeamCarousel';
import { useGlobalStore } from '@/store/global-store';
import { useState } from 'react';

const TeamSection = () => {
  const { isDesktop } = useGlobalStore();
  const [activeItem, setActiveItem] = useState(0);

  const handleImage = (value: string) => {
    setActiveItem(prev => {
      if (value === 'prev' && prev > 0) {
        return prev - 1;
      }

      if (value === 'next' && prev < 6) {
        return prev + 1;
      }

      return prev;
    });
  };

  return (
    <section id="team" className={styles.teamSection}>
      <Container>
        <div className={styles.teamMainWrap}>
          <TeamTextWrap handleImage={handleImage} />
          {isDesktop ? (
            <TeamCarousel activeItem={activeItem} />
          ) : (
            <TeamSlider />
          )}
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;

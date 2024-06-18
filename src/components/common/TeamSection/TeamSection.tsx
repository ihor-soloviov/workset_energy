'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Container from '../Container/Container';
const TeamSlider = dynamic(() => import('./TeamSlider/TeamSlider'), {
  ssr: false,
});
const TeamTextWrap = dynamic(() => import('./TeamTextWrap/TeamTextWrap'), {
  ssr: false,
});
const TeamCarousel = dynamic(() => import('./TeamCarousel/TeamCarousel'), {
  ssr: false,
});
import { useGlobalStore } from '@/store/global-store';
import styles from './TeamSection.module.css';

const TeamSection = () => {
  const { isDesktop } = useGlobalStore();
  const [activeItem, setActiveItem] = useState(0);

  const handleImage = (value: string) => {
    setActiveItem(prev => {
      if (value === 'prev' && prev > 0) {
        return prev - 1;
      }

      if (value === 'next' && prev < 4) {
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

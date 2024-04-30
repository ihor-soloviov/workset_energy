import React, { useEffect, useRef, useState } from 'react';
import styles from './TeamCarousel.module.css';
import { teamItems } from '../TeamSlider/teamItems';
type Props = {
  activeItem: number;
};

const TeamCarousel: React.FC<Props> = ({ activeItem }) => {
  const [unit, setUnit] = useState('rem');
  const [translateValue, setTranslateValue] = useState(19.8);
  // 198 - це сума ширини неактивного слайда 158px + gap 40px

  const checkWindowSize = () => {
    const smallDesktop = window.innerWidth < 1728;
    setUnit(smallDesktop ? 'rem' : 'px');
    setTranslateValue(smallDesktop ? 19.8 : 198);

    setTimeout(() => {
      console.log(`translateX(-${activeItem * translateValue}${unit})`);
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  return (
    <div className={styles.carousel}>
      <div
        style={{
          transform:
            activeItem < 5
              ? `translateX(-${activeItem * translateValue}${unit})`
              : `translateX(-${4 * translateValue}${unit})`,
        }}
        className={styles.carouselWrapper}
      >
        {teamItems.map((_, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} ${activeItem === index ? styles.active : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TeamCarousel;

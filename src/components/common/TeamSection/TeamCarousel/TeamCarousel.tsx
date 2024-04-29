import React, { useEffect, useRef, useState } from 'react';
import styles from './TeamCarousel.module.css';
type Props = {
  activeItem: number;
};

const TeamCarousel: React.FC<Props> = ({ activeItem }) => {
  const [isSmall, setIsSmall] = useState(window.innerWidth < 1728);

  const checkWindowSize = () => {
    setIsSmall(window.innerWidth < 1728);
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
              ? `translateX(-${activeItem * 198}px)`
              : `translateX(-${4 * 198}px)`,
        }}
        className={styles.carouselWrapper}
      >
        {[0, 1, 2, 3, 4, 5, 6].map((el, index) => (
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

import React, { useEffect, useRef, useState } from 'react';
import styles from './TeamCarousel.module.css';
import { teamItems } from '../TeamSlider/teamItems';
import Button from '../../Button/Button';
import TeamModal from '../TeamSlider/TeamModal/TeamModal';
type Props = {
  activeItem: number;
};

const TeamCarousel: React.FC<Props> = ({ activeItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const toggleModal = () => setIsModalOpen(!isModalOpen);

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
        {teamItems.map(({ className, title, text }, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} ${styles[className]} ${activeItem === index ? styles.active : ''}`}
          >
            <div className={styles.teamTextWrap}>
              <h3 className={styles.teamImgTitle}>{title}</h3>
              <p className={styles.teamImgText}>{text}</p>

              <Button
                handleClick={toggleModal}
                className={styles.teamImgBtn}
                type="button"
              >
                Kontakte
              </Button>
            </div>
          </div>
        ))}
      </div>
      <TeamModal
        title={teamItems[activeItem].title}
        email={teamItems[activeItem].email}
        tel={teamItems[activeItem].tel}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
      />
    </div>
  );
};

export default TeamCarousel;

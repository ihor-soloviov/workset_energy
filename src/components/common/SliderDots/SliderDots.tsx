import React from 'react';
import styles from './SliderDots.module.css';

type Props = {
  handleActiveSlide: (index: number, length: number) => void;
  count: number;
  activeSlide: number;
};
const SliderDots: React.FC<Props> = ({
  handleActiveSlide,
  count,
  activeSlide,
}) => {
  const dots = Array.from({ length: count }, (_, index) => (
    <button
      onClick={() => handleActiveSlide(index, count)}
      key={index}
      className={`${styles.sliderDot} ${activeSlide === index ? styles.active : ''}`}
    />
  ));
  return <div className={styles.sliderDots}>{dots}</div>;
};

export default SliderDots;

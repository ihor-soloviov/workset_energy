import React from 'react';
import styles from './Video.module.css';
const Video = () => {
  return (
    <video
      className={styles.video}
      src={require('../../../../public/videos/dayNight.mp4')}
      autoPlay
      muted
      loop
    />
  );
};

export default Video;

import React, { useEffect, useState } from 'react';
import styles from './Video.module.css';
import { useGlobalStore } from '@/store/global-store';

type Props = {
  isDark: boolean;
};

const Video: React.FC<Props> = ({ isDark }) => {
  const { isDesktop } = useGlobalStore();
  return (
    <div className={styles.videoWrap}>
      {isDesktop ? (
        <>
          <video
            className={styles.videoDesk}
            src={require('../../../../public/videos/dayDesk.mp4')}
            autoPlay
            muted
            loop
            playsInline
          />
          <video
            className={`${styles.videoDesk} ${styles.dark} ${isDark ? styles.night : ''}`}
            src={require('../../../../public/videos/nightDesk.mp4')}
            autoPlay
            muted
            loop
            playsInline
          />
        </>
      ) : (
        <>
          <video
            className={styles.videoMob}
            src={require('../../../../public/videos/dayMob.mp4')}
            autoPlay
            muted
            loop
            playsInline
          />
          <video
            className={`${styles.videoMob} ${styles.dark} ${isDark ? styles.night : ''}`}
            src={require('../../../../public/videos/nightMob.mp4')}
            autoPlay
            muted
            loop
            playsInline
          />
        </>
      )}
    </div>
  );
};

export default Video;

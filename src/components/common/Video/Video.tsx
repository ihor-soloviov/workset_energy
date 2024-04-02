import React from 'react';

const Video = () => {
  return (
    <video
      src={require('../../../../public/videos/dayNight.mp4')}
      autoPlay
      muted
      loop
    />
  );
};

export default Video;

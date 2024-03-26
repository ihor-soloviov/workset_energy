import HeroSection from '@/components/common/HeroSection/HeroSection';
import React from 'react';
import { wallboxHero } from '@/utils/hero';
import VideoSection from '@/components/common/VideoSection/VideoSection';
import { wallboxVideo } from '@/utils/video';
import VorteileSection from '@/components/common/ModulesVorteileSection/VorteileSection';
const Wallbox = () => {
  return (
    <>
      <HeroSection {...wallboxHero} />
      <VideoSection {...wallboxVideo} />
      {/* <VorteileSection sliderText={vorteileItems} sliderImages={sliderImages} /> */}
    </>
  );
};

export default Wallbox;

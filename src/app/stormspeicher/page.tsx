import React from 'react';
import HeroSection from '@/components/common/HeroSection/HeroSection';
import VideoSection from '@/components/common/VideoSection/VideoSection';
import VorteileSection from '@/components/common/ModulesVorteileSection/VorteileSection';

import { stormspeicherHero } from '@/utils/hero';
import { stormSteicherVideo } from '@/utils/video';

import { sliderImages, vorteileItems } from './slides';

const Stormspeicher = () => {
  return (
    <>
      <HeroSection {...stormspeicherHero} />
      <VideoSection {...stormSteicherVideo} />
      <VorteileSection sliderText={vorteileItems} sliderImages={sliderImages} />
    </>
  );
};

export default Stormspeicher;

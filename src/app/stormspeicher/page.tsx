import React from 'react';
import HeroSection from '@/components/common/HeroSection/HeroSection';
import VideoSection from '@/components/common/VideoSection/VideoSection';
import VorteileSection from '@/components/common/ModulesVorteileSection/VorteileSection';

import { stormspeicherHero } from '@/utils/hero';
import { stormSteicherVideo } from '@/utils/video';
import { sliderImages, vorteileItems } from './slides';
import SwitcherSection from '@/components/stormspeicher/SwitcherSection/SwitcherSection';

const Stormspeicher = () => {
  return (
    <>
      <HeroSection {...stormspeicherHero} />
      <VideoSection {...stormSteicherVideo} />
      <VorteileSection sliderText={vorteileItems} sliderImages={sliderImages} />
      <SwitcherSection />
    </>
  );
};

export default Stormspeicher;

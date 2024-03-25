import HeroSection from '@/components/common/HeroSection/HeroSection';
import ModulesVorteileSection from '@/components/common/ModulesVorteileSection/ModulesVorteileSection';
import PricingPlansSection from '@/components/common/PricingPlans/PricingPlansSection';
import VideoSection from '@/components/common/VideoSection/VideoSection';
import { pvAnlagenVideo } from '@/utils/video';
import { pvAnlagenHero } from '@/utils/hero';
import React from 'react';
import RedHelpBlock from '@/components/common/RedHelpSection/RedHelpBlock';

const PvAnlagen = () => {
  return (
    <>
      {/* <VideoSection {...pvAnlagenVideo} /> */}
      {/* <ModulesVorteileSection /> */}
      <HeroSection {...pvAnlagenHero} />
      <PricingPlansSection />
      <RedHelpBlock />
    </>
  );
};

export default PvAnlagen;

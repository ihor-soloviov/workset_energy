import HeroSection from '@/components/common/HeroSection/HeroSection';
import ModulesVorteileSection from '@/components/common/ModulesVorteileSection/ModulesVorteileSection';
import PricingPlansSection from '@/components/common/PricingPlans/PricingPlansSection';
import VideoSection from '@/components/common/VideoSection/VideoSection';
import { pvAnlagenVideo } from '@/utils/video';
import React from 'react';

const PvAnlagen = () => {
  return (
    <>
      {/* <VideoSection {...pvAnlagenVideo} /> */}
      {/* <ModulesVorteileSection /> */}
      <HeroSection
        imgMob="/images/pv-anlagen-hero-mob.jpg"
        title="PV-Anlagen"
        text="Sie wandelt Sonnenlicht in Strom um und ist daher eine nachhaltige und umweltfreundliche Energiequelle."
        imgDesc="/images/pv-anlagen-hero-desc.jpg"
      />
      <PricingPlansSection />
    </>
  );
};

export default PvAnlagen;

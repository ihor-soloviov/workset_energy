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
      <PricingPlansSection />
    </>
  );
};

export default PvAnlagen;

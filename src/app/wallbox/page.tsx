import React from 'react';
import HeroSection from '@/components/common/HeroSection/HeroSection';
import VideoSection from '@/components/common/VideoSection/VideoSection';
import VorteileSection from '@/components/common/ModulesVorteileSection/VorteileSection';
import PricingPlansSection from '@/components/common/PricingPlans/PricingPlansSection';
import EmployeeSection from '@/components/common/EmployeeSection/EmployeeSection';
import GoogleComSection from '@/components/common/GoogleComSection/GoogleComSection';
import TeamSection from '@/components/common/TeamSection/TeamSection';

import { wallboxHero } from '@/utils/hero';
import { wallboxVideo } from '@/utils/video';

import { sliderImages, vorteileItems } from './slides';
import ContactUsSection from '@/components/common/ContactUsSection/ContactUsSection';
import RedHelpSection from '@/components/common/RedHelpSection/RedHelpSection';

const Wallbox = () => {
  return (
    <>
      <HeroSection {...wallboxHero} />
      <VideoSection {...wallboxVideo} />
      <VorteileSection sliderText={vorteileItems} sliderImages={sliderImages} />
      <PricingPlansSection />
      <EmployeeSection />
      <GoogleComSection />
      <TeamSection />
      <ContactUsSection />
      <RedHelpSection />
    </>
  );
};

export default Wallbox;

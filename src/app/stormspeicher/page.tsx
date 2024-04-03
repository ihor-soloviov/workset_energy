import React from 'react';
import HeroSection from '@/components/common/HeroSection/HeroSection';
import VideoSection from '@/components/common/VideoSection/VideoSection';
import VorteileSection from '@/components/common/VorteileSection/VorteileSection';
import { stormspeicherHero } from '@/utils/hero';
import { stormSteicherVideo } from '@/utils/video';
import { sliderImages, vorteileItems } from '../../utils/stormSlides';
import SwitcherSection from '@/components/stormspeicher/SwitcherSection/SwitcherSection';
import PricingPlansSection from '@/components/common/PricingPlans/PricingPlansSection';
import EmployeeSection from '@/components/common/EmployeeSection/EmployeeSection';
import GoogleComSection from '@/components/common/GoogleComSection/GoogleComSection';
import TeamSection from '@/components/common/TeamSection/TeamSection';
import ContactUsSection from '@/components/common/ContactUsSection/ContactUsSection';
import RedHelpSection from '@/components/common/RedHelpSection/RedHelpSection';

const Stormspeicher = () => {
  return (
    <>
      <HeroSection {...stormspeicherHero} />
      <VideoSection {...stormSteicherVideo} />
      <VorteileSection sliderText={vorteileItems} sliderImages={sliderImages} />
      <SwitcherSection />
      <PricingPlansSection />
      <EmployeeSection />
      <GoogleComSection />
      <TeamSection />
      <ContactUsSection />
      <RedHelpSection />
    </>
  );
};

export default Stormspeicher;

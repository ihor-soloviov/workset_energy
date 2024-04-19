import HeroSection from '@/components/common/HeroSection/HeroSection';
import VorteileSection from '@/components/common/VorteileSection/VorteileSection';
import PricingPlansSection from '@/components/common/PricingPlansSection/PricingPlansSection';
import VideoSection from '@/components/common/VideoSection/VideoSection';
import { pvAnlagenVideo } from '@/utils/video';
import { pvAnlagenHero } from '@/utils/hero';
import React from 'react';
import RedHelpSection from '@/components/common/RedHelpSection/RedHelpSection';
import EmployeeSection from '@/components/common/EmployeeSection/EmployeeSection';
import GoogleComSection from '@/components/common/GoogleComSection/GoogleComSection';
import TeamSection from '@/components/common/TeamSection/TeamSection';
import ContactUsSection from '@/components/common/ContactUsSection/ContactUsSection';
import { sliderImages, vorteileItems } from '../../utils/pvSlides';

const PvAnlagen = () => {
  return (
    <>
      <h1>PV-Anlagen</h1>
      <HeroSection {...pvAnlagenHero} />
      <VideoSection {...pvAnlagenVideo} />
      <VorteileSection
        sliderText={vorteileItems}
        sliderImages={sliderImages}
        id="pv-vorteile"
      />
      <PricingPlansSection />
      <EmployeeSection />
      <GoogleComSection />
      <TeamSection />
      <ContactUsSection />
      <RedHelpSection />
    </>
  );
};

export default PvAnlagen;

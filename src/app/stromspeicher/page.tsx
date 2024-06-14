import React from 'react';
import HeroSection from '@/components/common/HeroSection/HeroSection';
import VorteileSection from '@/components/common/VorteileSection/VorteileSection';
import { stromspeicherHero } from '@/utils/hero';

import SwitcherSection from '@/components/stromspeicher/SwitcherSection/SwitcherSection';
import PricingPlansSection from '@/components/common/PricingPlansSection/PricingPlansSection';
import EmployeeSection from '@/components/common/EmployeeSection/EmployeeSection';
import GoogleComSection from '@/components/common/GoogleComSection/GoogleComSection';
import TeamSection from '@/components/common/TeamSection/TeamSection';
import ContactUsSection from '@/components/common/ContactUsSection/ContactUsSection';
import RedHelpSection from '@/components/common/RedHelpSection/RedHelpSection';

const Stromspeicher = () => {
  return (
    <>
      <HeroSection {...stromspeicherHero} />
      <PricingPlansSection />
      <VorteileSection />
      <SwitcherSection />
      <EmployeeSection />
      <GoogleComSection />
      <TeamSection />
      <ContactUsSection />
      <RedHelpSection />
    </>
  );
};

export default Stromspeicher;

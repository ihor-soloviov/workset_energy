import ContactUsSection from '@/components/common/ContactUsSection/ContactUsSection';
import EmployeeSection from '@/components/common/EmployeeSection/EmployeeSection';
import GoogleComSection from '@/components/common/GoogleComSection/GoogleComSection';
import StepSection from '@/components/common/StepSection/StepSection';
import TeamSection from '@/components/common/TeamSection/TeamSection';
import VisionSection from '@/components/common/VisionSection/VisionSection';
import ObjectSection from '@/components/uberuns/ObjectSection/ObjectSection';
import UberUnsHero from '@/components/uberuns/UberUnsHero/UberUnsHero';
import React from 'react';

const UberUns = () => {
  return (
    <>
      <UberUnsHero />
      <VisionSection />
      <EmployeeSection />
      <GoogleComSection />
      <TeamSection />
      <ObjectSection />
      <StepSection />
      <ContactUsSection />
    </>
  );
};

export default UberUns;

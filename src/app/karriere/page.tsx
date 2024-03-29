import EmployeeSection from '@/components/common/EmployeeSection/EmployeeSection';
import RedHelpBlock from '@/components/common/RedHelpSection/RedHelpSection';
import AdvantagesSection from '@/components/karriere/AdvatnagesSection/AdvantagesSection';
import KarriereHero from '@/components/karriere/KarriereHero/KarriereHero';
import OfferSection from '@/components/karriere/OfferSection/OfferSection';
import React from 'react';

const Karriere = () => {
  return (
    <>
      <KarriereHero />
      <AdvantagesSection />
      <OfferSection />
      <EmployeeSection />
      <RedHelpBlock />
    </>
  );
};

export default Karriere;

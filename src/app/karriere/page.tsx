import EmployeeSection from '@/components/common/EmployeeSection/EmployeeSection';
import RedHelpBlock from '@/components/common/RedHelpSection/RedHelpSection';
import AdvantagesSection from '@/components/karriere/AdvatnagesSection/AdvantagesSection';
import KarriereFormSection from '@/components/karriere/KarriereFormSection/KarriereFormSection';
import KarriereHero from '@/components/karriere/KarriereHero/KarriereHero';
import OfferSection from '@/components/karriere/OfferSection/OfferSection';
import React from 'react';

const Karriere = () => {
  return (
    <>
      <h1>Karriere</h1>
      <KarriereHero />
      <AdvantagesSection />
      <OfferSection />
      <EmployeeSection />
      <KarriereFormSection />
      <RedHelpBlock />
    </>
  );
};

export default Karriere;

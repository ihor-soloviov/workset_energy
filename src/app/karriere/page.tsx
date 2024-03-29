import EmployeeSection from '@/components/common/EmployeeSection/EmployeeSection';
import RedHelpBlock from '@/components/common/RedHelpSection/RedHelpSection';
import AdvantagesSection from '@/components/karriere/AdvatnagesSection/AdvantagesSection';
import KarriereHero from '@/components/karriere/KarriereHero/KarriereHero';
import React from 'react';

const Karriere = () => {
  return (
    <>
      <KarriereHero />
      <AdvantagesSection />
      <EmployeeSection />
      <RedHelpBlock />
    </>
  );
};

export default Karriere;

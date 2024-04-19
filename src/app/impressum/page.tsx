import React from 'react';

import ContactUsSection from '@/components/common/ContactUsSection/ContactUsSection';
import ImpressumHero from '@/components/impressum/ImpressumHero/ImpressumHero';
import ImpressumSection from '@/components/impressum/ImpressumSection/ImpressumSection';

const Impressum = () => {
  return (
    <>
      <h1>Impressum</h1>
      <ImpressumHero />
      <ImpressumSection />
      <ContactUsSection />
    </>
  );
};

export default Impressum;

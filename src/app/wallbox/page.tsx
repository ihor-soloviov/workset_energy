import HeroSection from '@/components/common/HeroSection/HeroSection';
import React from 'react';

const Wallbox = () => {
  return (
    <>
      <HeroSection
        imgMob="/images/wallbox-hero-mob.jpg"
        title="Wallbox"
        text="Ein hochmodernes Ladesystem für Elektrofahrzeuge, das bequeme und effiziente Betankungsmöglichkeiten bietet."
        imgDesc="/images/wallbox-hero-desc.jpg"
      />
    </>
  );
};

export default Wallbox;

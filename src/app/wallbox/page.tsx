import HeroSection from '@/components/common/HeroSection/HeroSection';
import React from 'react';
import { wallboxHero } from '@/utils/hero';
const Wallbox = () => {
  return (
    <>
      <HeroSection {...wallboxHero} />
    </>
  );
};

export default Wallbox;

import HeroSection from '@/components/common/HeroSection/HeroSection';
import React from 'react';
import { stormspeicherHero } from '@/utils/hero';
const Stormspeicher = () => {
  return (
    <>
      <HeroSection {...stormspeicherHero} />
    </>
  );
};

export default Stormspeicher;

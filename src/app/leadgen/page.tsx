'use client';

import React from 'react';
import LeadGenHeroSection from '@/components/leadgen/LeadGenHeroSection/LeadGenHeroSection';
import LeadGenComponent from '@/components/leadgen/LeadGenComponent/LeadGenComponent';
import { useGlobalStore } from '@/store/global-store';
const LeadGen = () => {
  const { isDesktop } = useGlobalStore();
  return (
    <>
      <LeadGenHeroSection isDesktop={isDesktop} />
      {!isDesktop && <LeadGenComponent />}
    </>
  );
};

export default LeadGen;

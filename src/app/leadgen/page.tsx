'use client';

import React from 'react';
import LeadGenHeroSection from '@/components/leadgen/LeadGenHeroSection/LeadGenHeroSection';
import LeadGenComponent from '@/components/leadgen/LeadGenComponent/LeadGenComponent';
import { useGlobalStore } from '@/store/global-store';
import LeadgenSection from '@/components/common/LeadgenSection/LeadgenSection';
const LeadGen = () => {
  const { isDesktop } = useGlobalStore();
  return (
    <>
      <LeadGenHeroSection isDesktop={isDesktop} />
      <LeadgenSection />
    </>
  );
};

export default LeadGen;

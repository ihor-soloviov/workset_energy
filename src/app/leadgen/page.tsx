'use client';

import React from 'react';
import LeadGenHero from '@/components/leadgen/LeadGenHero/LeadGenHero';
import LeadGenComponent from '@/components/leadgen/LeadGenComponent/LeadGenComponent';
import { useGlobalStore } from '@/store/global-store';
const LeadGen = () => {
  const { isDesktop } = useGlobalStore();
  return (
    <>
      <h1>Angebot</h1>
      <LeadGenHero isDesktop={isDesktop} />
      {!isDesktop && <LeadGenComponent />}
    </>
  );
};

export default LeadGen;

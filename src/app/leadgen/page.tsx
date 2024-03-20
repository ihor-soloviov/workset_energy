'use client';

import React, { useState, useEffect } from 'react';
import LeadGenHero from '@/components/leadgen/LeadGenHero/LeadGenHero';
import LeadGenComponent from '@/components/leadgen/LeadGenComponent/LeadGenComponent';
const LeadGen = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 1728);

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1728);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <LeadGenHero isDesktop={isDesktop} />
      {!isDesktop && <LeadGenComponent />}
    </>
  );
};

export default LeadGen;

'use client';

import React from 'react';
import styles from './PricingPlansSection.module.css';
import { inter } from '@/utils/fonts';
import { plans } from './plans';
import Plan from './Plan/Plan';
import RecycleTextWrap from '../RecycleTextWrap/RecycleTextWrap';
import { scrollToSection } from '@/utils/scroll';

const PricingPlansSection = () => {
  return (
    <section id="tarifpläne" className={styles.pricingPlansSection}>
      <div className={styles.pricingPlansWrap}>
        <div className={styles.pricingPlansHeader}>
          <RecycleTextWrap
            title="Günstige Preise für PV-Anlagen"
            titleClass={styles.plansTitle}
            text="Entdecken Sie unser Angebot an hochwertigen Produkten zu
          erschwinglichen Preisen und machen Sie den nächsten Schritt in
          Richtung einer umweltfreundlichen Zukunft."
            textClass={`${styles.plansText} ${inter.className}`}
          />
        </div>
        <ul className={styles.pricingPlansItems}>
          {plans.map((plan, index) => (
            <Plan
              handleBtnClick={() => scrollToSection('contact')}
              key={plan.name}
              plan={plan}
              index={index}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PricingPlansSection;

import React from 'react';
import styles from './PricingPlansSection.module.css';
import { inter } from '@/utils/fonts';
import { plans } from './plans';
import Plan from './Plan/Plan';

const PricingPlansSection = () => (
  <section className={styles.pricingPlansSection}>
    <div className={styles.pricingPlansWrap}>
      <div className={styles.pricingPlansHeader}>
        <h3 className={styles.plansTitle}>Günstige Preise für PV-Anlagen</h3>
        <p className={`${styles.plansText} ${inter.className}`}>
          Entdecken Sie unser Angebot an hochwertigen Produkten zu
          erschwinglichen Preisen und machen Sie den nächsten Schritt in
          Richtung einer umweltfreundlichen Zukunft.
        </p>
      </div>
      <ul className={styles.pricingPlansItems}>
        {plans.map(plan => (
          <Plan key={plan.name} plan={plan} />
        ))}
      </ul>
    </div>
  </section>
);

export default PricingPlansSection;

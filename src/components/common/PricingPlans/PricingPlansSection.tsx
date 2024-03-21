import React from 'react';
import styles from './PricingPlansSection.module.css';
import { inter } from '@/utils/fonts';
import { plans } from './plans';
import Image from 'next/image';
import CheckMarker from '/public/icons/check-circle.svg';

const PricingPlansSection = () => {
  return (
    <section className={styles.pricingPlansSection}>
      <div className={styles.pricingPlansWrap}>
        <div className={styles.pricingPlansHeader}>
          <h3 className={styles.plansTitle}>Affordable pricing plans</h3>
          <p className={`${styles.plansText} ${inter.className}`}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu
            egestas morbi sem vulputate etiam facilisis pellentesque ut quis
          </p>
        </div>
        <ul className={styles.pricingPlansItems}>
          {plans.map(
            ({ name, price, imageMob, imageDesk, article, benefits }) => (
              <li key={name} className={styles.pricingPlansItem}>
                <Image
                  className={styles.plansImageMob}
                  alt={`${name} plan collage`}
                  src={imageMob}
                />
                <Image
                  className={styles.plansImageDesk}
                  alt={`${name} plan collage`}
                  src={imageDesk}
                />
                <span className={styles.plansPrice}>ab {price}</span>
                <h4>{name}</h4>
                <article>{article}</article>
                <ul className={styles.plansBenefits}>
                  {benefits.map(benefit => (
                    <li key={benefit}>
                      <CheckMarker />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
};

export default PricingPlansSection;

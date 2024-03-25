import React from 'react';
import Image from 'next/image';
import CheckMarker from '/public/icons/check-circle.svg';
import { Plan } from '@/types/infoTypes';
import styles from './Plan.module.css';
import { inter } from '@/utils/fonts';
import RedButton from '../../RedButton/RedButton';

type Props = {
  plan: Plan;
};

const Plan: React.FC<Props> = ({
  plan: { name, imageMob, imageDesk, price, article, benefits },
}) => (
  <li className={styles.pricingPlansItem}>
    <Image
      className={styles.planImageMob}
      alt={`${name} plan collage`}
      src={imageMob}
    />
    <Image
      className={styles.planImageDesk}
      alt={`${name} plan collage`}
      src={imageDesk}
    />
    <div className={styles.pricingPlanInfo}>
      <span className={`${styles.planPrice} ${inter.className}`}>
        ab {price}
      </span>
      <h4 className={styles.planTitle}>{name}</h4>
      <article className={styles.planArticle}>{article}</article>
      <ul className={styles.planBenefits}>
        {benefits.map(benefit => (
          <li key={benefit} className={styles.planBenefit}>
            <CheckMarker />
            <span className={styles.benefit}>{benefit}</span>
          </li>
        ))}
      </ul>
      <RedButton>Mehr Info</RedButton>
    </div>
  </li>
);

export default Plan;
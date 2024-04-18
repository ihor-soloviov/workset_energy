'use client';
import React from 'react';
import Image from 'next/image';
import CheckMarker from '/public/icons/check-circle.svg';
import { PlanT } from '@/types/infoTypes';
import styles from './Plan.module.css';
import { inter } from '@/utils/fonts';

import Button from '../../Button/Button';
import useObserver from '@/hooks/useObserver';

type Props = {
  plan: PlanT;
  index: number;
  handleBtnClick: () => void;
};

const Plan: React.FC<Props> = ({
  plan: { name, imageMob, imageDesk, price, article, benefits },
  index,
  handleBtnClick,
}) => {
  useObserver(
    `.${styles.pricingPlansItem}`,
    `${styles.pricingPlansItemVisible}`,
  );
  return (
    <li className={styles.pricingPlansItem}>
      <Image
        loading="lazy"
        className={styles.planImageMob}
        alt={`${name} plan collage`}
        src={imageMob}
      />
      <Image
        loading="lazy"
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
        <Button
          handleClick={handleBtnClick}
          type="button"
          className={styles.planBtn}
        >
          Zum Angebot
        </Button>
      </div>
    </li>
  );
};

export default Plan;

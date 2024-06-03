'use client';
import React from 'react';
import Image from 'next/image';
import CheckMarker from '/public/icons/check-circle.svg';
import { PlanT } from '@/types/infoTypes';
import styles from './Plan.module.css';
import { inter } from '@/utils/fonts';

import Button from '../../Button/Button';
import useObserver from '@/hooks/useObserver';
interface CustomCSSProperties extends React.CSSProperties {
  '--i'?: string;
}
type Props = {
  plan: PlanT;
  index: number;
  handleBtnClick: () => void;
};

const customStyleFirst: CustomCSSProperties = { '--i': '0' };
const customStyleSecond: CustomCSSProperties = { '--i': '1' };
const customStyleThird: CustomCSSProperties = { '--i': '2' };
const customStyleFourth: CustomCSSProperties = { '--i': '3' };
const customStyleFifth: CustomCSSProperties = { '--i': '4' };

const Plan: React.FC<Props> = ({
  plan: { name, imageMob, imageDesk, price, benefits },
  index,
  handleBtnClick,
}) => {
  useObserver(
    `.${styles.pricingPlansItem}`,
    `${styles.pricingPlansItemVisible}`,
  );
  return (
    <li className={styles.pricingPlansItem}>
      {index === 0 && (
        <div className={styles.planBestWrap}>
          <span style={customStyleFirst}></span>
          <span style={customStyleSecond}></span>
          <span style={customStyleThird}></span>
          <span style={customStyleFourth}></span>
          <span style={customStyleFifth}></span>
          <p className={styles.planBestText}>Bestseller</p>
        </div>
      )}
      <Image
        quality={100}
        loading="lazy"
        className={styles.planImageMob}
        alt={`${name} plan collage`}
        src={imageMob}
      />
      <Image
        quality={100}
        loading="lazy"
        className={styles.planImageDesk}
        alt={`${name} plan collage`}
        src={imageDesk}
      />
      <div className={styles.pricingPlanInfo}>
        <span className={styles.planTitle}>{name}</span>
        <h4 className={styles.planPrice}> ab {price}</h4>

        <ul className={`${styles.planBenefits} ${inter.className}`}>
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

'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import CheckMarker from '/public/icons/check-circle.svg';
import { PlanT } from '@/types/infoTypes';
import styles from './Plan.module.css';
import { inter } from '@/utils/fonts';
import { usePathname } from 'next/navigation';
import LeadStepTwoSlider from './LeadStepTwoSlider/LeadStepTwoSlider';

import useObserver from '@/hooks/useObserver';
import Link from 'next/link';
interface CustomCSSProperties extends React.CSSProperties {
  '--i'?: string;
}
type Props = {
  plan: PlanT;
  index: number;
  disableSwiper?: () => void;
  enableSwiper?: () => void;
};

const customStyleFirst: CustomCSSProperties = { '--i': '0' };
const customStyleSecond: CustomCSSProperties = { '--i': '1' };
const customStyleThird: CustomCSSProperties = { '--i': '2' };
const customStyleFourth: CustomCSSProperties = { '--i': '3' };
const customStyleFifth: CustomCSSProperties = { '--i': '4' };

const Plan: React.FC<Props> = ({
  plan: { name, imageMob, imageDesk, price, benefits },
  index,
  disableSwiper,
  enableSwiper,
}) => {
  const [rangeOneValue, setRangeOneValue] = useState<number>(3);
  const [rangeTwoValue, setRangeTwoValue] = useState<number>(3);
  const [rangeThreeValue, setRangeThreeValue] = useState<number>(3);
  useObserver(
    `.${styles.pricingPlansItem}`,
    `${styles.pricingPlansItemVisible}`,
  );

  const formatValue = (value: number) =>
    value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const pathname = usePathname();

  const getCurrentRangeState = (index: number) => {
    switch (index) {
      case 0:
        return rangeOneValue;
      case 1:
        return rangeTwoValue;
      case 2:
        return rangeThreeValue;

      default:
        return rangeOneValue;
    }
  };
  const getCurrentRangeSetState = (index: number) => {
    switch (index) {
      case 0:
        return setRangeOneValue;
      case 1:
        return setRangeTwoValue;
      case 2:
        return setRangeThreeValue;

      default:
        return setRangeThreeValue;
    }
  };

  const getCurrentPrice = (index: number, rangeValue: number) => {
    switch (rangeValue) {
      case 3:
        return '11726';
      case 4:
        return '11726';
      case 5:
        return '11726';
      case 6:
        return '11726';
      case 7:
        return '11726';
      case 8:
        return '11726';
      case 9:
        return '11726';
      case 10:
        return '11726';
      case 11:
        return '11726';
      case 12:
        return '11726';
      case 13:
        return '11726';
      case 14:
        return '11726';
      case 15:
        return '11726';
      case 16:
        return '11726';
      case 17:
        return '11726';
      case 18:
        return '11726';
      case 19:
        return '11726';
      case 20:
        return '11726';
      case 21:
        return '11726';
      case 22:
        return '11726';
      case 23:
        return '11726';
      case 24:
        return '11726';
      case 25:
        return '11726';
      case 26:
        return '11726';
      case 27:
        return '11726';
      case 28:
        return '11726';
      case 29:
        return '11726';
      case 30:
        return '11726';

      default:
        return '';
    }
  };

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
        <h4 className={styles.planPrice}>
          ab {getCurrentPrice(index, getCurrentRangeState(index))} EUR
        </h4>

        <div className={styles.planRangeMainWrap}>
          <LeadStepTwoSlider
            rangeValue={getCurrentRangeState(index)}
            setRangeValue={getCurrentRangeSetState(index)}
            formatValue={formatValue}
            disableSwiper={disableSwiper}
            enableSwiper={enableSwiper}
          />
          <div className={`${styles.planRangeTextWrap} ${inter.className}`}>
            <p className={styles.planRangeText}>3 kWp</p>
            <p className={styles.planRangeText}>30+ kWp</p>
          </div>
        </div>

        <h5 className={styles.planListTitle}>Komplettpaket</h5>
        <ul className={`${styles.planBenefits} ${inter.className}`}>
          {benefits.map(benefit => (
            <li key={benefit} className={styles.planBenefit}>
              <CheckMarker />
              <span className={styles.benefit}>{benefit}</span>
            </li>
          ))}
        </ul>
        <Link href={'/leadgen'} className={styles.planBtn}>
          Preis anfragen
        </Link>
      </div>
    </li>
  );
};

export default Plan;

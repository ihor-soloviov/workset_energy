'use client';
import dynamic from 'next/dynamic';

import React, { useRef, useState } from 'react';
import { inter } from '@/utils/fonts';
import { plans } from './plans';
const Plan = dynamic(() => import('./Plan/Plan'), {
  ssr: false,
});
const RecycleTextWrap = dynamic(
  () => import('../RecycleTextWrap/RecycleTextWrap'),
  {
    ssr: false,
  },
);
import { useGlobalStore } from '@/store/global-store';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import SliderDots from '../SliderDots/SliderDots';
import styles from './PricingPlansSection.module.css';
import 'swiper/css';

const PricingPlansSection = () => {
  const { isDesktop } = useGlobalStore();
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType>();

  const handleActiveSlide = (index: number) => {
    setActiveIndex(index);
    swiperRef.current && swiperRef.current.slideTo(index);
  };

  return (
    <section id="tarifpläne" className={styles.pricingPlansSection}>
      <div className={styles.pricingPlansWrap}>
        <div className={styles.pricingPlansHeader}>
          <RecycleTextWrap
            title="Erschwingliche Preise für Photovoltaik-Anlagen"
            titleClass={styles.plansTitle}
            text="Jedes Projekt ist individuell, aber wir haben uns bemüht, Pakete zu erstellen, die deinen persönlichen Anforderungen an Preis, Leistung und Design entsprechen. Qualität muss nicht teuer sein – wähle 
WorkSET Energy."
            textClass={`${styles.plansText} ${inter.className}`}
          />
        </div>
        {!isDesktop ? (
          <>
            <Swiper
              className={styles.sliderWrap}
              onActiveIndexChange={e => setActiveIndex(e.realIndex)}
              spaceBetween={20}
              loop={true}
              slidesPerView={'auto'}
              onBeforeInit={swiper => {
                swiperRef.current = swiper;
              }}
            >
              {plans.map((plan, index) => (
                <SwiperSlide className={styles.slideWrap} key={index}>
                  <Plan plan={plan} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
            <SliderDots
              className={'plans'}
              count={3}
              activeSlide={activeIndex}
              handleActiveSlide={handleActiveSlide}
            />
          </>
        ) : (
          <ul className={styles.pricingPlansItems}>
            {plans.map((plan, index) => (
              <Plan key={plan.name} plan={plan} index={index} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default PricingPlansSection;

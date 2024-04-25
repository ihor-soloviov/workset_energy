'use client';

import 'swiper/css';
import React, { useRef, useState } from 'react';
import styles from './PricingPlansSection.module.css';
import { inter } from '@/utils/fonts';
import { plans } from './plans';
import Plan from './Plan/Plan';
import RecycleTextWrap from '../RecycleTextWrap/RecycleTextWrap';
import { scrollToSection } from '@/utils/scroll';
import { useGlobalStore } from '@/store/global-store';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import SliderDots from '../SliderDots/SliderDots';

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
            title="Günstige Preise für PV-Anlagen"
            titleClass={styles.plansTitle}
            text="Entdecken Sie unser Angebot an hochwertigen Produkten zu
          erschwinglichen Preisen und machen Sie den nächsten Schritt in
          Richtung einer umweltfreundlichen Zukunft."
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
              slidesPerView={1}
              onBeforeInit={swiper => {
                swiperRef.current = swiper;
              }}
            >
              {plans.map((plan, index) => (
                <SwiperSlide className={styles.slideWrap} key={index}>
                  <Plan
                    plan={plan}
                    index={index}
                    handleBtnClick={() => scrollToSection('contact')}
                  />
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
              <Plan
                handleBtnClick={() => scrollToSection('contact')}
                key={plan.name}
                plan={plan}
                index={index}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default PricingPlansSection;

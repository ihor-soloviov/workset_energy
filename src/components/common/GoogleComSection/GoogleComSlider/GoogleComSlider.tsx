'use client';

import 'swiper/css';
import Image from 'next/image';
import { inter } from '@/utils/fonts';
import React, { useRef } from 'react';
import styles from './GoogleComSlider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import commentsData from '../../../../comments.json';
import ArrowIcon from '/public/icons/slide-arrow.svg';
import StarIcon from '/public/icons/star.svg';

const GoogleComSlider = () => {
  const comments = commentsData.result.reviews;
  const swiperRef = useRef<SwiperType>();

  const starsArr = (count: number) => {
    return count < 1 || count > 5
      ? null
      : Array.from({ length: count }, (_, index) => (
          <StarIcon className={styles.slideArrowIcon} key={index} />
        ));
  };

  return (
    <div className={styles.sliderMainWrap}>
      <div
        onClick={() => swiperRef.current?.slidePrev()}
        className={styles.sliderBtnWrap}
      >
        <ArrowIcon className={styles.prevArrow} />
      </div>
      <Swiper
        className={styles.sliderWrap}
        modules={[Navigation]}
        navigation
        slidesPerView={'auto'}
        onBeforeInit={swiper => {
          swiperRef.current = swiper;
        }}
      >
        {comments.map(
          ({
            author_name,
            relative_time_description,
            text,
            profile_photo_url,
            rating,
          }) => (
            <SwiperSlide className={styles.slideWrap} key={author_name}>
              <div className={`${styles.slide} ${inter.className}`}>
                <h3 className={styles.slideTitle}>
                  {relative_time_description}
                </h3>
                <p className={styles.slideText}>
                  {text.length > 180 ? `${text.slice(0, 180)}...` : text}
                </p>
                <div className={styles.slideBottomWrap}>
                  <Image
                    width={63}
                    height={63}
                    className={styles.slideImg}
                    src={profile_photo_url}
                    alt="user photo"
                  />
                  <div className={styles.slideRatingWrap}>
                    <h3 className={styles.slideUserName}>{author_name}</h3>

                    <div className={styles.slideRating}>{starsArr(rating)}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ),
        )}
      </Swiper>
      <div
        onClick={() => swiperRef.current?.slideNext()}
        className={styles.sliderBtnWrap}
      >
        <ArrowIcon className={styles.nextArrow} />
      </div>
    </div>
  );
};

export default GoogleComSlider;

import styles from './OfferList.module.css';
import { inter, interTight } from '@/utils/fonts';
import Image from 'next/image';
import { offerItems, OfferItem } from './offerItems';
import LinkArrowIcon from '/public/icons/small-product-arrow.svg';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { useGlobalStore } from '@/store/global-store';
import { useRef, useState } from 'react';
import SliderDots from '@/components/common/SliderDots/SliderDots';

type OfferListProps = {
  showItems: boolean;
};
const OfferList = ({ showItems }: OfferListProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isDesktop } = useGlobalStore();
  const swiperRef = useRef<SwiperType>();

  const handleActiveSlide = (index: number) => {
    setActiveIndex(index);
    swiperRef.current && swiperRef.current.slideTo(index);
  };

  const currentItems = (offerItems: OfferItem[]) =>
    showItems ? offerItems : offerItems.slice(0, 3);

  return (
    <>
      {isDesktop ? (
        <ul className={`${styles.offerList} ${inter.className}`}>
          {currentItems(offerItems).map(
            ({
              mainTitle,
              mainText,
              title,
              text,
              timeType,
              mobile,
              desktop,
            }) => (
              <li className={styles.offerItem} key={mainTitle}>
                <Image
                  quality={100}
                  className={styles.offerImgMob}
                  loading="lazy"
                  placeholder="blur"
                  alt={title}
                  src={mobile}
                />
                <Image
                  quality={100}
                  className={styles.offerImgDesk}
                  loading="lazy"
                  placeholder="blur"
                  alt={title}
                  src={desktop}
                />
                <div className={styles.offerMainWrap}>
                  <div className={styles.offerTopWrap}>
                    <h3
                      className={`${styles.offerTopTitle} ${interTight.className}`}
                    >
                      {mainTitle}
                    </h3>
                    <p className={styles.offerTopText}>{mainText}</p>
                    <div className={styles.offerTimeWrap}>
                      <p className={styles.offerTime}>{timeType}</p>
                    </div>
                  </div>
                  <div className={styles.offerBottomWrap}>
                    <h4 className={styles.offerBottomTitle}>{title}</h4>
                    <p className={styles.offerBottomText}>{text}</p>
                    <Link className={styles.offerLink} href="/karriere/jobs">
                      Mehr Info
                      <LinkArrowIcon className={styles.offerIcon} />
                    </Link>
                  </div>
                </div>
              </li>
            ),
          )}
        </ul>
      ) : (
        <>
          {' '}
          <Swiper
            className={styles.sliderWrap}
            onActiveIndexChange={e => setActiveIndex(e.realIndex)}
            spaceBetween={15}
            loop={true}
            slidesPerView={1}
            onBeforeInit={swiper => {
              swiperRef.current = swiper;
            }}
          >
            {offerItems.map(
              (
                { mainText, mainTitle, title, text, timeType, mobile, desktop },
                index,
              ) => (
                <SwiperSlide key={index}>
                  <div className={styles.offerItem} key={mainTitle}>
                    <Image
                      quality={100}
                      className={styles.offerImgMob}
                      loading="lazy"
                      placeholder="blur"
                      alt={title}
                      src={mobile}
                    />
                    <Image
                      quality={100}
                      className={styles.offerImgDesk}
                      loading="lazy"
                      placeholder="blur"
                      alt={title}
                      src={desktop}
                    />
                    <div className={styles.offerMainWrap}>
                      <div className={styles.offerTopWrap}>
                        <h3
                          className={`${styles.offerTopTitle} ${interTight.className}`}
                        >
                          {mainTitle}
                        </h3>
                        <p className={styles.offerTopText}>{mainText}</p>
                        <div className={styles.offerTimeWrap}>
                          <p className={styles.offerTime}>{timeType}</p>
                        </div>
                      </div>
                      <div className={styles.offerBottomWrap}>
                        <h4 className={styles.offerBottomTitle}>{title}</h4>
                        <p className={styles.offerBottomText}>{text}</p>
                        <Link
                          className={styles.offerLink}
                          href="/karriere/jobs"
                        >
                          Mehr Info
                          <LinkArrowIcon className={styles.offerIcon} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ),
            )}
          </Swiper>
          <SliderDots
            className={'team'}
            count={5}
            activeSlide={activeIndex}
            handleActiveSlide={handleActiveSlide}
          />
        </>
      )}
    </>
  );
};

export default OfferList;

'use client';

import Link from 'next/link';
import styles from './HomeHeroSection.module.css';
import HomeHeroList from './HomeHeroList/HomeHeroList';
import homeHeroMob from '/public/images/home-page/home-hero-mob-new.webp';
import homeHeroDesk from '/public/images/home-page/home-hero-desk-new.webp';
import plan1Mob from '/public/images/common/plans/plan-1-mob.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useObserver from '@/hooks/useObserver';
import { useNavigateTo } from '@/hooks/useNavigationToThanks';
import { Navigate } from '@/types/navigate';

const HomeHeroSection = () => {
  useObserver(`.${styles.heroAnim}`, `${styles.heroAnimVisible}`);
  useObserver(`.${styles.heroImgWrap}`, `${styles.heroImgWrapVisible}`);
  useObserver(`.${styles.heroBgImgMob}`, `${styles.heroBgImgScaled}`);
  useObserver(`.${styles.heroBgImgDesk}`, `${styles.heroBgImgScaled}`);

  return (
    <section className={styles.heroSection}>
      <Image
        quality={100}
        className={styles.heroBgImgMob}
        fill
        alt={`hero-img`}
        placeholder="blur"
        src={homeHeroMob}
      />
      <Image
        quality={100}
        className={styles.heroBgImgDesk}
        fill
        alt={`hero-img`}
        placeholder="blur"
        src={homeHeroDesk}
      />
      <div className={styles.heroContainer}>
        <h2 className={`${styles.heroTitle} ${styles.heroAnim}`}>
          WorkSET Energy Dein Fachpartner
        </h2>
        <Link href={Navigate.plans} className={styles.heroImgWrap}>
          <Image
            quality={100}
            className={styles.heroImg}
            alt={`plan collage`}
            src={plan1Mob}
          />
          <div className={styles.heroPriceMainWrap}>
            <div className={styles.heroPriceWrap}>
              <p className={styles.heroPrice}>ab 12.456 EUR</p>
            </div>
            <p className={styles.heroPriceText}>Komplettpaket</p>
          </div>
        </Link>
        <div className={`${styles.heroLinkWrap} ${styles.heroAnim}`}>
          <Link className={styles.heroLink} href="/#leadgen">
            Jetzt berechnen
          </Link>
          <Link className={styles.heroAngebotLink} href="/#angebot-vergleichen">
            Angebot Vergleichen
          </Link>
        </div>
        <HomeHeroList />
      </div>
    </section>
  );
};

export default HomeHeroSection;

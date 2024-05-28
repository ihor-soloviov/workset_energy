import Link from 'next/link';
import styles from './HomeHeroSection.module.css';
import HomeHeroList from './HomeHeroList/HomeHeroList';
import homeHeroMob from '/public/images/home-page/home-hero-mob-new.webp';
import plan1Mob from '/public/images/common/plans/plan-1-mob.png';
import Image from 'next/image';

const HomeHeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <Image
        quality={100}
        className={styles.heroBgImg}
        fill
        alt={`hero-img`}
        placeholder="blur"
        src={homeHeroMob}
      />
      <div className={styles.heroContainer}>
        <h2 className={styles.heroTitle}>WorkSET Energy Dein Fachpartner</h2>
        <div className={styles.heroImgWrap}>
          <Image
            quality={100}
            className={styles.heroImg}
            alt={`plan collage`}
            src={plan1Mob}
          />
          <div className={styles.heroPriceMainWrap}>
            <div className={styles.heroPriceWrap}>
              <p className={styles.heroPrice}>ab 11.200 EUR</p>
            </div>
            <p className={styles.heroPriceText}>Komplettpaket</p>
          </div>
        </div>
        <Link className={styles.heroLink} href="/leadgen">
          Jetzt berechnen
        </Link>
        <HomeHeroList />
      </div>
    </section>
  );
};

export default HomeHeroSection;

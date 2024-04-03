import LeadGenComponent from '../LeadGenComponent/LeadGenComponent';
import styles from './LeadGenHero.module.css';
import Image from 'next/image';
import leadHeroImgMob from '/public/images/leadgen-page/lead-hero-mob.jpg';
import leadHeroImgDesk from '/public/images/leadgen-page/lead-hero-desc.jpg';

type LeadGenHeroProps = {
  isDesktop: boolean;
};

const LeadGenHero = ({ isDesktop }: LeadGenHeroProps) => {
  return (
    <section className={styles.leadHeroSection}>
      <Image
        className={styles.leadHeroImgMob}
        src={leadHeroImgMob}
        fill
        placeholder="blur"
        blurDataURL={'/images/leadgen-page/lead-hero-mob-blur.jpg'}
        alt="hero-img"
      />
      <Image
        className={styles.leadHeroImgDesc}
        src={leadHeroImgDesk}
        fill
        placeholder="blur"
        blurDataURL={'/images/leadgen-page/lead-hero-desc-blur.jpg'}
        alt="hero-img"
      />
      <div className={styles.leadHeroContainer}>
        {isDesktop && <LeadGenComponent />}
      </div>
    </section>
  );
};

export default LeadGenHero;

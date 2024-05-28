import LeadGenComponent from '../LeadGenComponent/LeadGenComponent';
import styles from './LeadGenHeroSection.module.css';
import Image from 'next/image';
import leadHeroImgMob from '/public/images/leadgen-page/lead-hero-mob.webp';
import leadHeroImgDesk from '/public/images/leadgen-page/lead-hero-desc.webp';

type LeadGenHeroProps = {
  isDesktop: boolean;
};

const LeadGenHeroSection = ({ isDesktop }: LeadGenHeroProps) => {
  return (
    <section className={styles.leadHeroSection}>
      <Image
        quality={100}
        className={styles.leadHeroImgMob}
        src={leadHeroImgMob}
        fill
        placeholder="blur"
        blurDataURL={'/images/leadgen-page/lead-hero-mob-blur.jpg'}
        alt="hero-img"
      />
      <Image
        quality={100}
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

export default LeadGenHeroSection;

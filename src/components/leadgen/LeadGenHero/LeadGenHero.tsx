import LeadGenComponent from '../LeadGenComponent/LeadGenComponent';
import styles from './LeadGenHero.module.css';

type LeadGenHeroProps = {
  isDesktop: boolean;
};

const LeadGenHero = ({ isDesktop }: LeadGenHeroProps) => {
  return (
    <section className={styles.leadHeroSection}>
      <div className={styles.leadHeroContainer}>
        {isDesktop && <LeadGenComponent />}
      </div>
    </section>
  );
};

export default LeadGenHero;

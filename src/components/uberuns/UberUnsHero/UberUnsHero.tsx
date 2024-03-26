import Button from '@/components/common/Button/Button';
import styles from './UberUnsHero.module.css';
import { inter } from '@/utils/fonts';
const UberUnsHero = () => {
  return (
    <section className={styles.uberHeroSection}>
      <div className={styles.uberHeroContainer}>
        <h2 className={styles.uberHeroTitle}>
          Ihr zuverlässiger Partner für
          <br className={styles.uberBr} /> PV-Anlage
        </h2>
        <p className={`${styles.uberHeroText} ${inter.className}`}>
          Wir erleichtern Ihnen den Übergang zu einer nachhaltigen Zukunft mit
          Solarlösungen
        </p>
        <Button type="button" className={styles.uberHeroBtn}>
          Mehr Info
        </Button>
      </div>
    </section>
  );
};

export default UberUnsHero;

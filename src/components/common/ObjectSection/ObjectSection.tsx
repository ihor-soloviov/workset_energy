import Container from '@/components/common/Container/Container';
import styles from './ObjectSection.module.css';
import ObjectSlider from './ObjectSlider/ObjectSlider';
import { inter } from '@/utils/fonts';

const ObjectSection = () => {
  return (
    <section className={styles.objectSection}>
      <Container>
        <h2 className={styles.objectMainTitle}>
          Sehen Sie sich unsere Projekte an:
        </h2>
        <p className={`${styles.objectMainText} ${inter.className}`}>
          Mehr als 10 000+ Kunden in ganz Deutschland haben bereits die
          Möglichkeit genutzt, mit unserer Hilfe Geld zu sparen.
        </p>
        <ObjectSlider />
      </Container>
    </section>
  );
};

export default ObjectSection;

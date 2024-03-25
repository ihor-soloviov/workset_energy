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
          Sehen Sie, wie wir Solarenergie nutzen, um sauberen und effizienten
          Strom zu erzeugen
        </p>
        <ObjectSlider />
      </Container>
    </section>
  );
};

export default ObjectSection;

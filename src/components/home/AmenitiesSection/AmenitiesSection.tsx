import Container from '@/components/common/Container/Container';
import ProductList from './AmenitiesList/AmenitiesList';
import styles from './AmenitiesSection.module.css';
import { inter } from '@/utils/fonts';

const AmenitiesSection = () => {
  return (
    <section className={styles.amenitiesSection}>
      <Container>
        <h2 className={styles.amenitiesMainTitle}>Warum WorkSET Energy?</h2>
        <p className={`${styles.amenitiesMainText} ${inter.className}`}>
          Entscheide dich für Zuverlässigkeit und Teamwork!
        </p>
        <ProductList />
      </Container>
    </section>
  );
};

export default AmenitiesSection;

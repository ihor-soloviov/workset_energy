import Container from '@/components/common/Container/Container';
import ProductList from './AmenitiesList/AmenitiesList';
import styles from './AmenitiesSection.module.css';
import RecycleTextWrap from '@/components/common/RecycleTextWrap/RecycleTextWrap';
import { inter } from '@/utils/fonts';

const AmenitiesSection = () => {
  return (
    <section className={styles.amenitiesSection}>
      <Container>
        <RecycleTextWrap
          title="Warum WorkSET Energy?"
          titleClass={styles.amenitiesMainTitle}
          text="Entscheide dich für Zuverlässigkeit und Teamwork!"
          textClass={`${styles.amenitiesMainText} ${inter.className}`}
        />
        <ProductList />
      </Container>
    </section>
  );
};

export default AmenitiesSection;

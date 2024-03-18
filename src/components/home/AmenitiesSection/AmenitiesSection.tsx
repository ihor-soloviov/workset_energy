import ProductList from './AmenitiesList/AmenitiesList';
import styles from './AmenitiesSection.module.css';
import { inter } from '@/utils/fonts';

const AmenitiesSection = () => {
  return (
    <section className={styles.amenitiesSection}>
      <div className={styles.amenitiesContainer}>
        <h2 className={styles.amenitiesMainTitle}>Unsere Produkte</h2>
        <p className={`${styles.amenitiesMainText} ${inter.className}`}>
          Entspannt Geld sparen mit Qualitätsprodukten. Langlebig, effizient,
          nachhaltig
        </p>
        <ProductList />
      </div>
    </section>
  );
};

export default AmenitiesSection;

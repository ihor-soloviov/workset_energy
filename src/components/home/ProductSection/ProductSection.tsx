import ProductList from './ProductList/ProductList';
import styles from './ProductSection.module.css';
import { inter } from '@/utils/fonts';

const ProductSection = () => {
  return (
    <section className={styles.productSection}>
      <div className={styles.productContainer}>
        <h2 className={styles.productMainTitle}>Unsere Produkte</h2>
        <p className={`${styles.productMainText} ${inter.className}`}>
          Entspannt Geld sparen mit Qualitätsprodukten. Langlebig, effizient,
          nachhaltig
        </p>
        <ProductList />
      </div>
    </section>
  );
};

export default ProductSection;

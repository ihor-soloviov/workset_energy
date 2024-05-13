import ProductList from './ProductList/ProductList';
import RecycleTextWrap from '@/components/common/RecycleTextWrap/RecycleTextWrap';
import { inter } from '@/utils/fonts';
import styles from './ProductSection.module.css';

const ProductSection = () => {
  return (
    <section className={styles.productSection}>
      <div className={styles.productContainer}>
        <RecycleTextWrap
          title="Unsere Produkte"
          titleClass={styles.productMainTitle}
          text=" Wir bieten unseren Kunden die Möglichkeit von Spitzentechnologie zu profitieren. Füge deiner Finanzanalyse hinzu, was du für wichtig erachtest"
          textClass={`${styles.productMainText} ${inter.className}`}
        />
        <ProductList />
      </div>
    </section>
  );
};

export default ProductSection;

import ProductList from './ProductList/ProductList';
import styles from './ProductSection.module.css';
import { inter } from '@/utils/fonts';
import RecycleTextWrap from '@/components/common/RecycleTextWrap/RecycleTextWrap';

const ProductSection = () => {
  return (
    <section className={styles.productSection}>
      <div className={styles.productContainer}>
        <RecycleTextWrap
          title="Unsere Produkte"
          titleClass={styles.productMainTitle}
          text=" Entspannt Geld sparen mit Qualitätsprodukten. Langlebig, effizient,
          nachhaltig"
          textClass={`${styles.productMainText} ${inter.className}`}
        />
        <ProductList />
      </div>
    </section>
  );
};

export default ProductSection;

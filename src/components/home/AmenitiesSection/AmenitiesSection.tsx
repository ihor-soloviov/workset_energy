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
          text="Mit unserer Arbeit beweisen wir, dass Qualität und Geschwindigkeit zu demokratischen Preisen erhältlich sein können. Firmeneigene Monteure, hochwertige Komponenten und keine Vorauszahlung – das ist WorkSET Energy!"
          textClass={`${styles.amenitiesMainText} ${inter.className}`}
        />
        <ProductList />
      </Container>
    </section>
  );
};

export default AmenitiesSection;

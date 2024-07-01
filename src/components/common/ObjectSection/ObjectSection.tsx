import { inter } from '@/utils/fonts';
import Container from '@/components/common/Container/Container';
import dynamic from 'next/dynamic';
const ObjectSlider = dynamic(() => import('./ObjectSlider/ObjectSlider'));

import styles from './ObjectSection.module.css';

const ObjectSection = () => {
  return (
    <section id="unsere-projekte" className={styles.objectSection}>
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

import styles from './EmployeeSection.module.css';
import { inter } from '@/utils/fonts';
import ArrowIcon from '/public/icons/small-arrow-btn.svg';
import Container from '../Container/Container';
import Button from '../Button/Button';
import EmployeeList from './EmployeeList/EmployeeList';

const EmployeeSection = () => {
  return (
    <section className={styles.employeeSection}>
      <Container>
        <h2 className={styles.employeeMainTitle}>
          Unsere wichtigste Ressource sind unsere Mitarbeiter
        </h2>
        <p className={`${styles.employeeMainText} ${inter.className}`}>
          In diesem Video zeigen wir im Detail alle Etappen, die unsere Kunden
          auf ihrem Weg zur Energie der Zukunft durchlaufen. Mr. Energy zeigt
          dir eine detaillierte Schritt-für-Schritt-Anleitung und beantwortet
          die am häufigsten gestellten Fragen.
        </p>
        <EmployeeList />
        <Button className={styles.employeeBtn} type="button">
          Zum Angebot
          <ArrowIcon className={styles.employeeIcon} />
        </Button>
      </Container>
    </section>
  );
};

export default EmployeeSection;

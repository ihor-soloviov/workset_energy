import styles from './EmployeeSection.module.css';
import { inter } from '@/utils/fonts';
import ArrowIcon from '/public/icons/small-arrow-btn.svg';
import Container from '../Container/Container';
import Button from '../Button/Button';
import EmployeeList from './EmployeeList/EmployeeList';
import RecycleTextWrap from '../RecycleTextWrap/RecycleTextWrap';

const EmployeeSection = () => {
  return (
    <section className={styles.employeeSection}>
      <Container>
        <RecycleTextWrap
          title="Unsere wichtigste Ressource sind unsere Mitarbeiter"
          titleClass={styles.employeeMainTitle}
          text="In diesem Video zeigen wir im Detail alle Etappen, die unsere Kunden
          auf ihrem Weg zur Energie der Zukunft durchlaufen. Mr. Energy zeigt
          dir eine detaillierte Schritt-für-Schritt-Anleitung und beantwortet
          die am häufigsten gestellten Fragen."
          textClass={`${styles.employeeMainText} ${inter.className}`}
        />
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

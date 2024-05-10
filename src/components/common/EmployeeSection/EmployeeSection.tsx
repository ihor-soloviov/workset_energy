'use client';
import styles from './EmployeeSection.module.css';
import { inter } from '@/utils/fonts';
import ArrowIcon from '/public/icons/small-arrow-btn.svg';
import Container from '../Container/Container';
import Button from '../Button/Button';
import EmployeeList from './EmployeeList/EmployeeList';
import RecycleTextWrap from '../RecycleTextWrap/RecycleTextWrap';
import { usePathname } from 'next/navigation';
import { scrollToSection } from '@/utils/scroll';

const EmployeeSection = () => {
  const pathname = usePathname();
  return (
    <section id="mitarbeiter" className={styles.employeeSection}>
      <Container>
        <RecycleTextWrap
          title="Unsere wichtigste Ressource sind unsere Mitarbeiter"
          titleClass={styles.employeeMainTitle}
          text="Ein Team von Experten, das sich durch Fachkompetenz und Engagement auszeichnet. Gemeinsam setzen wir innovative Lösungen um und bringen die Energie der Zukunft in Ihr Zuhause"
          textClass={`${styles.employeeMainText} ${inter.className}`}
        />
        <EmployeeList pathname={pathname} />
        {pathname !== '/karriere' && (
          <Button
            handleClick={() => scrollToSection('contact')}
            className={styles.employeeBtn}
            type="button"
          >
            Zum Angebot
            <ArrowIcon className={styles.employeeIcon} />
          </Button>
        )}
      </Container>
    </section>
  );
};

export default EmployeeSection;

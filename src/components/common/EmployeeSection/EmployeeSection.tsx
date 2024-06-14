'use client';
import dynamic from 'next/dynamic';
import styles from './EmployeeSection.module.css';
import { inter } from '@/utils/fonts';
const EmployeeList = dynamic(() => import('./EmployeeList/EmployeeList'), {
  ssr: false,
});
const RecycleTextWrap = dynamic(
  () => import('../RecycleTextWrap/RecycleTextWrap'),
  {
    ssr: false,
  },
);
import Container from '../Container/Container';
import Button from '../Button/Button';
import { usePathname } from 'next/navigation';
import { scrollToSection } from '@/utils/scroll';
import Arrow from '../Arrow/Arrow';

const EmployeeSection = () => {
  const pathname = usePathname();
  return (
    <section id="mitarbeiter" className={styles.employeeSection}>
      <Container>
        <RecycleTextWrap
          title="Unsere wichtigste Ressource sind unsere Mitarbeiter"
          titleClass={styles.employeeMainTitle}
          text="Ein Team von Experten, das sich durch Fachkompetenz und Engagement auszeichnet. Gemeinsam setzen wir innovative Lösungen um und bringen die Energie der Zukunft in dein Zuhause."
          textClass={`${styles.employeeMainText} ${inter.className}`}
        />
        <EmployeeList pathname={pathname} />
        {pathname !== '/karriere' && (
          <Button
            handleClick={() => scrollToSection('kontact')}
            className={styles.employeeBtn}
            type="button"
          >
            Zum Angebot
            <Arrow className={styles.employeeIcon} />
          </Button>
        )}
      </Container>
    </section>
  );
};

export default EmployeeSection;

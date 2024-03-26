import styles from './TeamSection.module.css';
import Container from '../Container/Container';
import { inter } from '@/utils/fonts';
import Button from '../Button/Button';
import TeamSlider from './TeamSlider/TeamSlider';
import ArrowIcon from '/public/icons/small-arrow-btn.svg';
const TeamSection = () => {
  return (
    <section id="team-section" className={styles.teamSection}>
      <Container>
        <div className={styles.teamMainWrap}>
          <div className={styles.teamTextWrap}>
            <h2 className={styles.teamTitle}>
              Unser Team
              <br className={styles.teamBr} /> von Experten
            </h2>
            <p className={`${styles.teamText} ${inter.className}`}>
              Werde Teil unseres Teams! Hinterlasse uns deine Daten und wir
              kontaktieren dich
            </p>
            <Button className={styles.teamBtn} type="button">
              Zum Angebot
              <ArrowIcon className={styles.teamIcon} />
            </Button>
          </div>
          <TeamSlider />
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;

import styles from './TeamSection.module.css';
import Container from '../Container/Container';
import TeamSlider from './TeamSlider/TeamSlider';
import TeamTextWrap from './TeamTextWrap/TeamTextWrap';

const TeamSection = () => (
  <section id="team-section" className={styles.teamSection}>
    <Container>
      <div className={styles.teamMainWrap}>
        <TeamTextWrap />
        <TeamSlider />
      </div>
    </Container>
  </section>
);

export default TeamSection;

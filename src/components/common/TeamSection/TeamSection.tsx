import styles from './TeamSection.module.css';
import Container from '../Container/Container';
import TeamSlider from './TeamSlider/TeamSlider';
import TextWrap from './TextWrap/TextWrap';

const TeamSection = () => (
  <section id="team-section" className={styles.teamSection}>
    <Container>
      <div className={styles.teamMainWrap}>
        <TextWrap />
        <TeamSlider />
      </div>
    </Container>
  </section>
);

export default TeamSection;

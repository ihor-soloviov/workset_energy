import QuestionList from './QuestionList/QuestionList';
import styles from './QuestionSection.module.css';
import { inter } from '@/utils/fonts';

const QuestionSection = () => {
  return (
    <section className={styles.questSection}>
      <div className={styles.questContainer}>
        <h2 className={styles.questMainTitle}>Ist deine Frage hier dabei?</h2>
        <p className={`${styles.questMainText} ${inter.className}`}>
          Häufig gestellte Fragen von Kunden
        </p>
        <QuestionList />
      </div>
    </section>
  );
};

export default QuestionSection;

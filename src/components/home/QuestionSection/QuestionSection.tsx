import QuestionList from './QuestionList/QuestionList';
import styles from './QuestionSection.module.css';

const QuestionSection = () => {
  return (
    <section className={styles.questSection}>
      <div className={styles.questContainer}>
        <h2 className={styles.questMainTitle}>Ist deine Frage hier dabei?</h2>
        <QuestionList />
      </div>
    </section>
  );
};

export default QuestionSection;

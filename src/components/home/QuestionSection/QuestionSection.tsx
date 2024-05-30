import RecycleTextWrap from '@/components/common/RecycleTextWrap/RecycleTextWrap';
import QuestionList from './QuestionList/QuestionList';
import styles from './QuestionSection.module.css';

const QuestionSection = () => {
  return (
    <section className={styles.questSection}>
      <div className={styles.questContainer}>
        <RecycleTextWrap
          title="Ist deine Frage hier dabei?"
          titleClass={styles.questMainTitle}
        />

        <QuestionList />
      </div>
    </section>
  );
};

export default QuestionSection;

import RecycleTextWrap from '@/components/common/RecycleTextWrap/RecycleTextWrap';
import QuestionList from './QuestionList/QuestionList';
import styles from './QuestionSection.module.css';
import { inter } from '@/utils/fonts';

const QuestionSection = () => {
  return (
    <section className={styles.questSection}>
      <div className={styles.questContainer}>
        <RecycleTextWrap
          title="Ist deine Frage hier dabei?"
          titleClass={styles.questMainTitle}
          text="Häufig gestellte Fragen."
          textClass={`${styles.questMainText} ${inter.className}`}
        />
        <QuestionList />
      </div>
    </section>
  );
};

export default QuestionSection;

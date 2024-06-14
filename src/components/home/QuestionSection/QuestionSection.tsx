import dynamic from 'next/dynamic';

const QuestionList = dynamic(() => import('./QuestionList/QuestionList'), {
  ssr: false,
});

const RecycleTextWrap = dynamic(
  () => import('@/components/common/RecycleTextWrap/RecycleTextWrap'),
  {
    ssr: false,
  },
);

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

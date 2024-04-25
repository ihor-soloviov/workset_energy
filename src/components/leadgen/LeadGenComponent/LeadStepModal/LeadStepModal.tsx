import styles from './LeadStepModal.module.css';
import Button from '@/components/common/Button/Button';
import CrossIcon from '/public/icons/cross.svg';
import { inter } from '@/utils/fonts';

type LeadStepModalProps = {
  handleModalClick: () => void;
};

const LeadStepModal = ({ handleModalClick }: LeadStepModalProps) => {
  return (
    <div className={styles.LeadModalMainWrap}>
      <Button
        handleClick={handleModalClick}
        className={styles.LeadModalCloseBtn}
        type="button"
      >
        <CrossIcon className={styles.LeadModalIcon} />
      </Button>
      <div className={styles.LeadModalContainer}>
        <h2 className={styles.LeadModalTitle}>WorkSET Energy sagt Danke!</h2>
        <h2 className={styles.LeadModalTitleDesc}>
          Das Team der WorkSET dankt!
        </h2>
        <p className={`${styles.LeadModalText} ${inter.className}`}>
          Wir haben deine Anfrage erhalten und freuen uns, dich auf deinem Weg
          zu nachhaltiger Energie unterstützen zu dürfen
        </p>
        <p className={`${styles.LeadModalTextDesc} ${inter.className}`}>
          Wir haben Ihre Anfrage erhalten und freuen uns darauf, Sie auf Ihrem
          Weg zu nachhaltiger Energie zu unterstützen
        </p>
        <Button
          handleClick={handleModalClick}
          className={styles.LeadModalBtn}
          type="button"
        >
          Hauptseite
        </Button>
        <Button
          handleClick={handleModalClick}
          className={styles.LeadModalBtnDesc}
          type="button"
        >
          Zurück zu Main
        </Button>
      </div>
    </div>
  );
};

export default LeadStepModal;

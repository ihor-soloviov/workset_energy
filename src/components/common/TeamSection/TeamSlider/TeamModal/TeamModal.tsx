import Button from '@/components/common/Button/Button';
import styles from './TeamModal.module.css';
import CopyIcon from '/public/icons/copy.svg';
import CopiedPopup from '/public/icons/copied.svg';
import CrossIcon from '/public/icons/cross.svg';
import { inter } from '@/utils/fonts';
import { useCallback, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

type TeamModalProps = {
  toggleModal: () => void;
  isModalOpen: boolean;
  email: string;
  tel: string;
  title: string;
};

const TeamModal = ({
  toggleModal,
  isModalOpen,
  email,
  tel,
  title,
}: TeamModalProps) => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [telCopied, setTelCopied] = useState(false);

  const copyToClipboard = useCallback((index: number) => {
    index === 0 ? setEmailCopied(true) : setTelCopied(true);
    setTimeout(() => {
      index === 0 ? setEmailCopied(false) : setTelCopied(false);
    }, 2000);
  }, []);

  return (
    <div
      className={`${styles.modalBackdrop} ${isModalOpen ? styles.open : ''}`}
    >
      <div className={styles.modalMainWrap}>
        <div className={styles.modalTopWrap}>
          <Button
            handleClick={toggleModal}
            className={styles.modalCloseBtn}
            type="button"
          >
            <CrossIcon className={styles.modalCrossIcon} />
          </Button>
        </div>
        <div className={styles.modalContainer}>
          <h2 className={styles.modalMainTitle}>
            Jetzt anrufen und Beratung vereinbaren:
          </h2>
          <div className={styles.modalTitleWrap}>
            <h3 className={styles.modalTitle}>{`${title}`}</h3>
          </div>
          <ul className={`${styles.modalList} ${inter.className}`}>
            <CopiedPopup
              className={`${styles.copiedPopup} ${emailCopied && styles.copiedEmailPopup}`}
            />
            <CopiedPopup
              className={`${styles.copiedPopup} ${telCopied && styles.copiedTelPopup}`}
            />
            {[0, 1].map((_, index) => (
              <li className={styles.modalItem} key={index}>
                <p className={styles.modalLabel}>
                  {index === 0 ? 'E-Mail:' : 'Telefon-Nr.:'}
                </p>
                <div className={styles.modalBottomWrap}>
                  <div className={styles.modalLinkWrap}>
                    <a
                      className={styles.modalLink}
                      href={
                        index === 0
                          ? `mailto:${email}`
                          : `tel:${tel.replace(/\s/g, '')}`
                      }
                    >
                      {index === 0 ? email : tel}
                    </a>
                  </div>
                  <CopyToClipboard
                    text={index === 0 ? email : tel}
                    onCopy={() => copyToClipboard(index)}
                  >
                    <button
                      className={`${styles.modalCopyBtn} ${
                        index === 0
                          ? emailCopied
                            ? styles.emailCopied
                            : ''
                          : telCopied
                            ? styles.telCopied
                            : ''
                      }`}
                      type="button"
                    >
                      <CopyIcon className={styles.modalCopyIcon} />
                    </button>
                  </CopyToClipboard>
                </div>
              </li>
            ))}
          </ul>
          <Button
            handleClick={toggleModal}
            className={styles.modalBtn}
            type="button"
          >
            Zurück
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;

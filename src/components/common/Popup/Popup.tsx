'use client';
import styles from './Popup.module.css';
import SuccessIcon from '/public/icons/popup-success.svg';
import ErrorIcon from '/public/icons/popup-error.svg';
import { useGlobalStore } from '@/store/global-store';

const Popup = () => {
  const { popupAction } = useGlobalStore();

  return (
    <>
      {popupAction.visible && (
        <div className={styles.popupWrap}>
          {popupAction.status === 'success' && (
            <SuccessIcon className={styles.popupIcon} />
          )}
          {popupAction.status === 'error' && (
            <ErrorIcon className={styles.popupIcon} />
          )}
        </div>
      )}
    </>
  );
};

export default Popup;

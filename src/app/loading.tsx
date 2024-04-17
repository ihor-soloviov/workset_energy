'use client';
import styles from './loading.module.css';
import { ThreeDots } from 'react-loader-spinner';

export default function Loading() {
  return (
    <div className={styles.loaderWrap}>
      <ThreeDots
        visible={true}
        height="50"
        width="50"
        color="#f32c40"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass={styles.loader}
      />
    </div>
  );
}

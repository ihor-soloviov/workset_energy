'use client';
import styles from './loader.module.css';
import { ThreeDots } from 'react-loader-spinner';

export default function Loading() {
  return (
    <div className={styles.loaderPage}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#f32c40"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass={styles.loader}
      />
    </div>
  );
}

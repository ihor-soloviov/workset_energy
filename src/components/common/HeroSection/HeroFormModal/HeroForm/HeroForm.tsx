'use client';
import styles from './HeroForm.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { inter, interTight } from '@/utils/fonts';
import ArrowIcon from '/public/icons/small-arrow-btn.svg';
import Button from '../../../Button/Button';
import { useThankYouStore } from '@/store/hero-store';

const HeroForm = () => {
  const { setStylesChangedToTrue, setStylesChangedToFalse } =
    useThankYouStore();

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      name: '',
      tel: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      tel: Yup.number().typeError('Invalid number').required('Required'),
    }),
    onSubmit: values => {
      console.log(values);
      setStylesChangedToTrue();
    },
  });
  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.heroForm} ${inter.className}`}
    >
      <label className={styles.heroLabel}>
        Vorname*
        <input
          className={`${styles.heroInput} ${touched.name && errors.name && styles.error}`}
          placeholder="Vorname"
          {...getFieldProps('name')}
        />
        {touched.name && errors.name && (
          <p className={styles.errorText}>{errors.name}</p>
        )}
      </label>
      <label className={styles.heroLabel}>
        Telefon-Nr*
        <input
          className={`${styles.heroInput} ${touched.tel && errors.tel && styles.error}`}
          placeholder="Telefon-Nr"
          {...getFieldProps('tel')}
        />
        {touched.tel && errors.tel && (
          <p className={styles.errorText}>{errors.tel}</p>
        )}
      </label>
      <Button
        className={`${styles.heroFormBtn} ${interTight.className}`}
        type="submit"
      >
        Senden
        <ArrowIcon className={styles.heroIcon} />
      </Button>
    </form>
  );
};

export default HeroForm;

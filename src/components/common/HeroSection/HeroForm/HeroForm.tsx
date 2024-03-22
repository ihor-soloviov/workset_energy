'use client';

import styles from './HeroForm.module.css';
import ArrowIcon from '/public/icons/small-arrow-btn.svg';
import CrossIcon from '/public/icons/cross.svg';
import Button from '../../Button/Button';
import { inter, interTight } from '@/utils/fonts';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type HeroFormProps = {
  handleModalClick: () => void;
};

const HeroForm = ({ handleModalClick }: HeroFormProps) => {
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
    },
  });

  return (
    <div className={styles.heroFormWrap}>
      <div className={styles.heroTopWrap}>
        <Button
          handleClick={handleModalClick}
          type="button"
          className={styles.heroCloseBtn}
        >
          <CrossIcon className={styles.heroCloseIcon} />
        </Button>
      </div>
      <div className={styles.heroFormContainer}>
        <h2 className={styles.heroTitle}>Kontaktiere uns</h2>
        <p className={styles.heroText}>
          Bitte fülle das untenstehende Formular aus und wir werden uns in Kürze
          mit dir in Verbindung setzen
        </p>
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
      </div>
    </div>
  );
};

export default HeroForm;

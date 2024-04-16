'use client';

import styles from './HeroForm.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { inter, interTight } from '@/utils/fonts';
import ArrowIcon from '/public/icons/small-arrow-btn.svg';
import Button from '../../../Button/Button';

import { formDataPost } from '@/utils/api';

type Props = {
  hideModal: () => void;
};

const HeroForm: React.FC<Props> = ({ hideModal }) => {
  const {
    handleSubmit,
    errors,
    touched,
    getFieldProps,
    isValid,
    dirty,
    resetForm,
  } = useFormik({
    initialValues: {
      name: '',
      tel: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      tel: Yup.number().typeError('Invalid number').required('Required'),
    }),
    onSubmit: async ({ tel, name }) => {
      const formData = new FormData();

      formData.append('userPhone', tel);
      formData.append('userName', name);

      const status = await formDataPost(
        formData,
        'https://mailer.work-set.eu/energyApi/phone',
      );
      status === 200 && hideModal();
      resetForm();
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
        disabled={!(isValid && dirty)}
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

'use client';

import { inter } from '@/utils/fonts';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './SendEmailForm.module.css';
import Button from '../../Button/Button';

const SendEmailForm = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={handleSubmit} className={styles.sendEmailForm}>
      <div className={styles.sendEmailInputWrap}>
        <input
          {...getFieldProps('email')}
          placeholder="Deine E-Mail-Kontaktadresse"
          className={`${styles.sendEmailInput} ${inter.className}`}
        />
        {touched.email && errors.email && (
          <p className={styles.errorText}>{errors.email}</p>
        )}
      </div>
      <Button className={styles.sendEmailBtn} type="submit">
        Senden
      </Button>
    </form>
  );
};

export default SendEmailForm;

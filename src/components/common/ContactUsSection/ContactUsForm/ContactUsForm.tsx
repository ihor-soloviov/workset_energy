'use client';

import { inter } from '@/utils/fonts';
import { interTight } from '@/utils/fonts';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './ContactUsForm.module.css';
import Button from '../../Button/Button';
import useObserver from '@/hooks/useObserver';
import { formDataPost } from '@/utils/api';
import { ThreeDots } from 'react-loader-spinner';
import { useState } from 'react';

const ContactUsForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  useObserver(`.${styles.contactUsForm}`, `${styles.contactUsFormVisible}`);

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
      email: '',
      tel: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      tel: Yup.number().typeError('Invalid number').required('Required'),
      message: Yup.string(),
    }),
    onSubmit: async ({ name, email, tel, message }) => {
      setIsLoading(true);
      const formData = new FormData();

      const formDataFields = {
        userName: name,
        userEmail: email,
        userPhone: tel,
        userComment: message,
      };

      Object.entries(formDataFields).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const status = await formDataPost(
        formData,
        'https://mailer.work-set.eu/energyApi/contact-us',
      );
      status === 200 && console.log('200');
      setIsLoading(false);
      resetForm();
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.contactUsForm} ${inter.className}`}
    >
      <label className={styles.contactUsLabel}>
        Name, Nachname*
        <input
          placeholder="Name, Nachname"
          className={`${styles.contactUsInput} ${touched.name && errors.name && styles.error}`}
          {...getFieldProps('name')}
        />
        {touched.name && errors.name && (
          <p className={styles.errorText}>{errors.name}</p>
        )}
      </label>
      <div className={styles.contactUsLabelWrap}>
        <label className={`${styles.contactUsLabel} ${styles.email}`}>
          E-Mail*
          <input
            placeholder="E-Mail"
            className={`${styles.contactUsInput} ${touched.email && errors.email && styles.error}`}
            {...getFieldProps('email')}
          />
          {touched.email && errors.email && (
            <p className={styles.errorText}>{errors.email}</p>
          )}
        </label>
        <label className={styles.contactUsLabel}>
          Telefon-Nr.*
          <input
            placeholder="Telefon-Nr."
            className={`${styles.contactUsInput} ${touched.tel && errors.tel && styles.error}`}
            {...getFieldProps('tel')}
          />
          {touched.tel && errors.tel && (
            <p className={styles.errorText}>{errors.tel}</p>
          )}
        </label>
      </div>
      <label className={styles.contactUsLabelTextArea}>
        Nachricht*
        <textarea
          placeholder="Nachricht"
          className={styles.contactUsTextArea}
          {...getFieldProps('message')}
        />
      </label>
      <Button
        disabled={!(isValid && dirty)}
        className={`${styles.contactUsBtn} ${interTight.className}`}
        type="submit"
      >
        {isLoading ? (
          <ThreeDots
            visible={true}
            height="50"
            width="50"
            color="#fff"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass={styles.loader}
          />
        ) : (
          'Senden'
        )}
      </Button>
    </form>
  );
};

export default ContactUsForm;

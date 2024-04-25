'use client';
import { Option } from 'react-dropdown';
import { inter } from '@/utils/fonts';
import { interTight } from '@/utils/fonts';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './ContactUsForm.module.css';
import Button from '../../Button/Button';
import { formDataPost } from '@/utils/api';
import { ThreeDots } from 'react-loader-spinner';
import { useState } from 'react';
import { useGlobalStore } from '@/store/global-store';
import FormSelect from '../../FormSelect/FormSelect';
import { questOptions } from '@/utils/questOptions';

const ContactUsForm = () => {
  const [questValue, setQuestValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setPopupAction, isDesktop } = useGlobalStore();

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
      userName: '',
      userEmail: '',
      userPhone: '',
      userAddress: '',
      userComment: '',
    },
    validationSchema: Yup.object({
      userName: Yup.string().required('Required'),
      userEmail: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      userPhone: Yup.number().typeError('Invalid number').required('Required'),
      userAddress: Yup.string(),
      userComment: Yup.string(),
    }),
    onSubmit: async ({
      userName,
      userEmail,
      userPhone,
      userComment,
      userAddress,
    }) => {
      setIsLoading(true);
      const formData = new FormData();

      const formDataFields = {
        userName,
        userEmail,
        userPhone,
        userAddress,
        userQuest: questValue,
        userComment,
      };

      Object.entries(formDataFields).forEach(([key, value]) => {
        formData.append(key, value);
      });

      await formDataPost(formData, 'contact-us', setPopupAction);

      setIsLoading(false);
      resetForm();
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.contactUsForm} ${inter.className}`}
    >
      <div className={styles.contactUsLabelWrap}>
        <label className={styles.contactUsLabel}>
          Name, Nachname*
          <input
            placeholder="Name, Nachname"
            className={`${styles.contactUsInput} ${touched.userName && errors.userName && styles.error}`}
            {...getFieldProps('userName')}
          />
          {touched.userName && errors.userName && (
            <p className={styles.errorText}>{errors.userName}</p>
          )}
        </label>

        <label className={`${styles.contactUsLabel} ${styles.email}`}>
          E-Mail*
          <input
            placeholder="E-Mail"
            className={`${styles.contactUsInput} ${touched.userEmail && errors.userEmail && styles.error}`}
            {...getFieldProps('userEmail')}
          />
          {touched.userEmail && errors.userEmail && (
            <p className={styles.errorText}>{errors.userEmail}</p>
          )}
        </label>
      </div>
      <div className={styles.contactUsLabelWrap}>
        <label className={styles.contactUsLabel}>
          Telefon-Nr.*
          <input
            placeholder="Telefon-Nr."
            className={`${styles.contactUsInput} ${touched.userPhone && errors.userPhone && styles.error}`}
            {...getFieldProps('userPhone')}
          />
          {touched.userPhone && errors.userPhone && (
            <p className={styles.errorText}>{errors.userPhone}</p>
          )}
        </label>

        <label className={styles.contactUsLabel}>
          Adresse des Projekts
          <input
            placeholder="Adresse des Projekts"
            className={`${styles.contactUsInput} ${touched.userAddress && errors.userAddress && styles.error}`}
            {...getFieldProps('userAddress')}
          />
          {touched.userAddress && errors.userAddress && (
            <p className={styles.errorText}>{errors.userAddress}</p>
          )}
        </label>
      </div>
      {!isDesktop && (
        <FormSelect
          label="Welche Art der Beratung wünschst du?"
          options={questOptions}
          value={questValue}
          onChange={(e: Option) => setQuestValue(e.value)}
          placeholder={'Welche Art der Beratung wünschst du?'}
        />
      )}
      <label className={styles.contactUsLabelTextArea}>
        Nachricht*
        <textarea
          placeholder="Nachricht"
          className={styles.contactUsTextArea}
          {...getFieldProps('userComment')}
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

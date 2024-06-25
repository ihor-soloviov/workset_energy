'use client';

import styles from './HeroForm.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { inter, interTight } from '@/utils/fonts';

import Button from '../../../Button/Button';
import { formDataPost } from '@/utils/api';
import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useGlobalStore } from '@/store/global-store';
import { questOptions } from '@/utils/questOptions';
import FormSelect from '@/components/common/FormSelect/FormSelect';
import { Option } from 'react-dropdown';
import Arrow from '@/components/common/Arrow/Arrow';

type Props = {
  hideModal: () => void;
};

const HeroForm: React.FC<Props> = ({ hideModal }) => {
  const { setPopupAction } = useGlobalStore();
  const [isLoading, setIsLoading] = useState(false);
  const [questValue, setQuestValue] = useState('');

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
      userPhone: '',
      userEmail: '',
      userPostcode: '',
    },
    validationSchema: Yup.object({
      userName: Yup.string().required('Required'),
      userPhone: Yup.number().typeError('Invalid number').required('Required'),
      userEmail: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      userPostcode: Yup.string()
        .matches(/^[0-9]+$/, 'Must be only digits')
        .min(5, 'Must be exactly 5 digits')
        .max(5, 'Must be exactly 5 digits')
        .required('Required'),
    }),
    onSubmit: async ({ userName, userPhone, userEmail, userPostcode }) => {
      setIsLoading(true);
      const formData = new FormData();
      const formDataFields = {
        userName,
        userPhone,
        userEmail,
        userPostcode,
        userQuest: questValue,
      };

      Object.entries(formDataFields).forEach(([key, value]) => {
        formData.append(key, value);
      });

      await formDataPost(formData, 'contact-hero', setPopupAction);
      setIsLoading(false);
      hideModal();
      resetForm();
    },
  });
  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.heroForm} ${inter.className}`}
    >
      <label className={styles.heroLabel}>
        Vor- und Nachname*
        <input
          className={`${styles.heroInput} ${touched.userName && errors.userName && styles.error}`}
          placeholder="Vor- und Nachname"
          {...getFieldProps('userName')}
        />
        {touched.userName && errors.userName && (
          <p className={styles.errorText}>{errors.userName}</p>
        )}
      </label>
      <label className={styles.heroLabel}>
        Telefon-Nr*
        <input
          className={`${styles.heroInput} ${touched.userPhone && errors.userPhone && styles.error}`}
          placeholder="Telefon-Nr"
          {...getFieldProps('userPhone')}
        />
        {touched.userPhone && errors.userPhone && (
          <p className={styles.errorText}>{errors.userPhone}</p>
        )}
      </label>
      <FormSelect
        className="hero"
        label="Welche Art der Beratung wünschst du?"
        options={questOptions}
        value={questValue}
        onChange={(e: Option) => setQuestValue(e.value)}
        placeholder={'Welche Art der Beratung wünschst du?'}
      />
      <label className={styles.heroLabel}>
        E-Mail*
        <input
          placeholder="E-Mail"
          className={`${styles.heroInput} ${touched.userEmail && errors.userEmail && styles.error}`}
          {...getFieldProps('userEmail')}
        />
        {touched.userEmail && errors.userEmail && (
          <p className={styles.errorText}>{errors.userEmail}</p>
        )}
      </label>
      <label className={styles.heroLabel}>
        PLZ der Projektadresse*
        <input
          placeholder="PLZ der Projektadresse"
          className={`${styles.heroInput} ${touched.userPostcode && errors.userPostcode && styles.error}`}
          {...getFieldProps('userPostcode')}
        />
        {touched.userPostcode && errors.userPostcode && (
          <p className={styles.errorText}>{errors.userPostcode}</p>
        )}
      </label>

      <Button
        disabled={!(isValid && dirty)}
        className={`${styles.heroFormBtn} ${interTight.className}`}
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
          <>
            Absenden
            <Arrow className={styles.heroIcon} />
          </>
        )}
      </Button>
    </form>
  );
};

export default HeroForm;

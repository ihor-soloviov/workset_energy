'use client';

import styles from './HeroForm.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { inter, interTight } from '@/utils/fonts';
import ArrowIcon from '/public/icons/small-arrow-btn.svg';
import Button from '../../../Button/Button';
import { formDataPost } from '@/utils/api';
import { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useGlobalStore } from '@/store/global-store';
import { questOptions } from '@/utils/questOptions';
import FormSelect from '@/components/common/FormSelect/FormSelect';
import { Option } from 'react-dropdown';

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
      userAddress: '',
    },
    validationSchema: Yup.object({
      userName: Yup.string().required('Required'),
      userPhone: Yup.number().typeError('Invalid number').required('Required'),
      userEmail: Yup.string().email('Invalid email address'),
      userAddress: Yup.string(),
    }),
    onSubmit: async ({ userName, userPhone, userEmail, userAddress }) => {
      setIsLoading(true);
      const formData = new FormData();
      const formDataFields = {
        userName,
        userPhone,
        userEmail,
        userAddress,
        userQuest: questValue,
      };

      Object.entries(formDataFields).forEach(([key, value]) => {
        formData.append(key, value);
      });

      await formDataPost(formData, 'contact-hero');
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
        Vorname*
        <input
          className={`${styles.heroInput} ${touched.userName && errors.userName && styles.error}`}
          placeholder="Vorname"
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
        E-Mail
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
        Adresse des Projekts
        <input
          placeholder="Adresse des Projekts"
          className={`${styles.heroInput} ${touched.userAddress && errors.userAddress && styles.error}`}
          {...getFieldProps('userAddress')}
        />
        {touched.userAddress && errors.userAddress && (
          <p className={styles.errorText}>{errors.userAddress}</p>
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
            Senden
            <ArrowIcon className={styles.heroIcon} />
          </>
        )}
      </Button>
    </form>
  );
};

export default HeroForm;

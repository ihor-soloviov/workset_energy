'use client';

import styles from './LeadStepSevenForm.module.css';
import Button from '@/components/common/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { interTight, inter } from '@/utils/fonts';
import { LeadFormProps } from '../../../types';
import { useState } from 'react';
import { formDataPost } from '@/utils/api';
import { useGlobalStore } from '@/store/global-store';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigateToThankYou } from '@/hooks/useNavigationToThanks';

const LeadStepSevenForm = ({
  formData,
  setFormData,
  step,
  setStep,
}: LeadFormProps) => {
  const thankYou = useNavigateToThankYou();
  const [isLoading, setIsLoading] = useState(false);
  const { setPopupAction } = useGlobalStore();
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
      userFirstName: '',
      userLastName: '',
      userEmail: '',
      userPhone: '',
      userStreet: '',
      userPostcode: '',
    },
    validationSchema: Yup.object({
      userFirstName: Yup.string().required('Required'),
      userLastName: Yup.string().required('Required'),
      userEmail: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      userPhone: Yup.number().typeError('Invalid number').required('Required'),

      userStreet: Yup.string().required('Required'),
      userPostcode: Yup.string().required('Required'),
    }),
    onSubmit: async values => {
      setIsLoading(true);

      setFormData({ ...formData, contactData: values });

      const leadGenData = new FormData();

      Object.entries({ ...formData, contactData: values }).forEach(
        ([key, value]) => {
          if (typeof value === 'object' && !Array.isArray(value)) {
            leadGenData.append(key, JSON.stringify(value));
          } else {
            leadGenData.append(key, value.toString());
          }
        },
      );

      console.log('leadGenData', { ...leadGenData });

      await formDataPost(leadGenData, 'leadgen', setPopupAction);
      setIsLoading(false);
      resetForm();
      setStep(step + 1);
      thankYou();
    },
  });

  return (
    <form
      className={`${styles.stepSevenForm} ${inter.className}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.stepSevenLabelWrap}>
        <label className={styles.stepSevenLabel}>
          Vorname*
          <input
            placeholder="Vorname"
            className={`${styles.stepSevenInput} ${touched.userFirstName && errors.userFirstName && styles.error}`}
            {...getFieldProps('userFirstName')}
          />
          {touched.userFirstName && errors.userFirstName && (
            <p className={styles.errorText}>{errors.userFirstName}</p>
          )}
        </label>
        <label className={styles.stepSevenLabel}>
          Nachname*
          <input
            placeholder="Nachname"
            className={`${styles.stepSevenInput} ${touched.userLastName && errors.userLastName && styles.error}`}
            {...getFieldProps('userLastName')}
          />
          {touched.userLastName && errors.userLastName && (
            <p className={styles.errorText}>{errors.userLastName}</p>
          )}
        </label>
      </div>
      <div className={styles.stepSevenLabelWrap}>
        <label className={styles.stepSevenLabel}>
          E-Mail*
          <input
            placeholder="E-Mail"
            className={`${styles.stepSevenInput} ${touched.userEmail && errors.userEmail && styles.error}`}
            {...getFieldProps('userEmail')}
          />
          {touched.userEmail && errors.userEmail && (
            <p className={styles.errorText}>{errors.userEmail}</p>
          )}
        </label>
        <label className={styles.stepSevenLabel}>
          Telefon-Nr.*
          <input
            placeholder="Telefon-Nr."
            className={`${styles.stepSevenInput} ${touched.userPhone && errors.userPhone && styles.error}`}
            {...getFieldProps('userPhone')}
          />
          {touched.userPhone && errors.userPhone && (
            <p className={styles.errorText}>{errors.userPhone}</p>
          )}
        </label>
      </div>
      <div className={styles.stepSevenLabelWrap}>
        <label className={styles.stepSevenLabel}>
          Straße der Projektadresse*
          <input
            placeholder="Straße der Projektadresse"
            className={`${styles.stepSevenInput} ${touched.userStreet && errors.userStreet && styles.error}`}
            {...getFieldProps('userStreet')}
          />
          {touched.userStreet && errors.userStreet && (
            <p className={styles.errorText}>{errors.userStreet}</p>
          )}
        </label>
        <label className={styles.stepSevenLabel}>
          PLZ und Stadt der Projektadresse*
          <input
            placeholder="PLZ und Stadt der Projektadresse"
            className={`${styles.stepSevenInput} ${touched.userPostcode && errors.userPostcode && styles.error}`}
            {...getFieldProps('userPostcode')}
          />
          {touched.userPostcode && errors.userPostcode && (
            <p className={styles.errorText}>{errors.userPostcode}</p>
          )}
        </label>
      </div>
      <Button
        disabled={!(isValid && dirty)}
        type="submit"
        className={`${styles.stepSevenBtn} ${interTight.className}`}
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
          'Weiter'
        )}
      </Button>
    </form>
  );
};

export default LeadStepSevenForm;

'use client';

import styles from './LeadStepFiveForm.module.css';
import Button from '@/components/common/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { interTight, inter } from '@/utils/fonts';
import { LeadFormProps } from '../../../types';

const LeadStepFiveForm = ({
  formData,
  setFormData,
  step,
  setStep,
  handlePrevStepClick,
}: LeadFormProps) => {
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

      userPostcode: '',
    },
    validationSchema: Yup.object({
      userFirstName: Yup.string().required('Required'),
      userLastName: Yup.string().required('Required'),
      userEmail: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      userPhone: Yup.number().typeError('Invalid number').required('Required'),

      userPostcode: Yup.string()
        .matches(/^[0-9]+$/, 'Must be only digits')
        .min(5, 'Must be exactly 5 digits')
        .max(5, 'Must be exactly 5 digits')
        .required('Required'),
    }),
    onSubmit: async values => {
      setFormData({ ...formData, contactData: values });

      resetForm();
      setStep(step + 1);
    },
  });

  return (
    <form
      className={`${styles.stepFiveForm} ${inter.className}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.stepFiveLabelWrap}>
        <label className={styles.stepFiveLabel}>
          Vorname*
          <input
            placeholder="Vorname"
            className={`${styles.stepFiveInput} ${touched.userFirstName && errors.userFirstName && styles.error}`}
            {...getFieldProps('userFirstName')}
          />
          {touched.userFirstName && errors.userFirstName && (
            <p className={styles.errorText}>{errors.userFirstName}</p>
          )}
        </label>
        <label className={styles.stepFiveLabel}>
          Nachname*
          <input
            placeholder="Nachname"
            className={`${styles.stepFiveInput} ${touched.userLastName && errors.userLastName && styles.error}`}
            {...getFieldProps('userLastName')}
          />
          {touched.userLastName && errors.userLastName && (
            <p className={styles.errorText}>{errors.userLastName}</p>
          )}
        </label>
      </div>
      <div className={styles.stepFiveLabelWrap}>
        <label className={styles.stepFiveLabel}>
          E-Mail*
          <input
            placeholder="E-Mail"
            className={`${styles.stepFiveInput} ${touched.userEmail && errors.userEmail && styles.error}`}
            {...getFieldProps('userEmail')}
          />
          {touched.userEmail && errors.userEmail && (
            <p className={styles.errorText}>{errors.userEmail}</p>
          )}
        </label>
        <label className={styles.stepFiveLabel}>
          Telefon-Nr.*
          <input
            placeholder="Telefon-Nr."
            className={`${styles.stepFiveInput} ${touched.userPhone && errors.userPhone && styles.error}`}
            {...getFieldProps('userPhone')}
          />
          {touched.userPhone && errors.userPhone && (
            <p className={styles.errorText}>{errors.userPhone}</p>
          )}
        </label>
      </div>

      <label className={styles.stepFiveLabel}>
        PLZ der Projektadresse*
        <input
          placeholder="PLZ der Projektadresse"
          className={`${styles.stepFiveInput} ${touched.userPostcode && errors.userPostcode && styles.error}`}
          {...getFieldProps('userPostcode')}
        />
        {touched.userPostcode && errors.userPostcode && (
          <p className={styles.errorText}>{errors.userPostcode}</p>
        )}
      </label>

      <div className={`${styles.stepFiveBtnWrap} ${interTight.className}`}>
        <Button
          className={styles.stepFiveBtn}
          handleClick={handlePrevStepClick}
          type="button"
        >
          Zurück
        </Button>
        <Button
          disabled={!(isValid && dirty)}
          type="submit"
          className={styles.stepFiveBtn}
        >
          Absenden
        </Button>
      </div>
    </form>
  );
};

export default LeadStepFiveForm;

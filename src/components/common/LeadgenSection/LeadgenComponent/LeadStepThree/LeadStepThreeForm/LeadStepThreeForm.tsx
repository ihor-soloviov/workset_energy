'use client';

import styles from './LeadStepThreeForm.module.css';
import Button from '@/components/common/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { interTight, inter } from '@/utils/fonts';
import { LeadFormProps } from '../../../types';

const LeadStepThreeForm = ({
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
      userName: '',

      userPhone: '',
    },
    validationSchema: Yup.object({
      userName: Yup.string().required('Required'),

      userPhone: Yup.number().typeError('Invalid number').required('Required'),
    }),
    onSubmit: async values => {
      setFormData({ ...formData, contactData: values });

      resetForm();
      setStep(step + 1);
    },
  });

  return (
    <form
      className={`${styles.stepThreeForm} ${inter.className}`}
      onSubmit={handleSubmit}
    >
      <label className={styles.stepThreeLabel}>
        Vor- und Nachname*
        <input
          placeholder="Vor- und Nachname*"
          className={`${styles.stepThreeInput} ${touched.userName && errors.userName && styles.error}`}
          {...getFieldProps('userName')}
        />
        {touched.userName && errors.userName && (
          <p className={styles.errorText}>{errors.userName}</p>
        )}
      </label>

      <label className={styles.stepThreeLabel}>
        Telefon-Nr.*
        <input
          placeholder="Telefon-Nr.*"
          className={`${styles.stepThreeInput} ${touched.userPhone && errors.userPhone && styles.error}`}
          {...getFieldProps('userPhone')}
        />
        {touched.userPhone && errors.userPhone && (
          <p className={styles.errorText}>{errors.userPhone}</p>
        )}
      </label>

      <div className={`${styles.stepThreeBtnWrap} ${interTight.className}`}>
        <Button
          className={styles.stepThreeBtn}
          handleClick={handlePrevStepClick}
          type="button"
        >
          Zurück
        </Button>
        <Button
          disabled={!(isValid && dirty)}
          type="submit"
          className={styles.stepThreeBtn}
        >
          Weiter
        </Button>
      </div>
    </form>
  );
};

export default LeadStepThreeForm;

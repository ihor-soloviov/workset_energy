'use client';

import styles from './LeadStepFourForm.module.css';
import Button from '@/components/common/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { interTight, inter } from '@/utils/fonts';
import { LeadFormProps } from '../../../types';

const LeadStepFourForm = ({
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
      userPostcode: '',
      userEmail: '',

      userMessage: '',
    },
    validationSchema: Yup.object({
      userPostcode: Yup.string().required('Required'),
      userEmail: Yup.string()
        .email('Invalid email address')
        .required('Required'),

      userMessage: Yup.string(),
    }),
    onSubmit: async values => {
      setFormData({ ...formData, extraContactData: values });

      resetForm();
      setStep(step + 1);
    },
  });

  return (
    <form
      className={`${styles.stepFourForm} ${inter.className}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.stepFourLabelWrap}>
        <label className={styles.stepFourLabel}>
          PLZ und Stadt der Projektadresse*
          <input
            placeholder="PLZ und Stadt der Projektadresse"
            className={`${styles.stepFourInput} ${touched.userPostcode && errors.userPostcode && styles.error}`}
            {...getFieldProps('userPostcode')}
          />
          {touched.userPostcode && errors.userPostcode && (
            <p className={styles.errorText}>{errors.userPostcode}</p>
          )}
        </label>

        <label className={styles.stepFourLabel}>
          E-Mail*
          <input
            placeholder="E-Mail"
            className={`${styles.stepFourInput} ${touched.userEmail && errors.userEmail && styles.error}`}
            {...getFieldProps('userEmail')}
          />
          {touched.userEmail && errors.userEmail && (
            <p className={styles.errorText}>{errors.userEmail}</p>
          )}
        </label>
      </div>
      <label className={styles.stepFourLabel}>
        <textarea
          placeholder="Nachricht"
          className={styles.stepFourTextArea}
          {...getFieldProps('userMessage')}
        ></textarea>
      </label>
      <div className={`${styles.stepFourBtnWrap} ${interTight.className}`}>
        <Button
          className={styles.stepFourBtn}
          handleClick={handlePrevStepClick}
          type="button"
        >
          Zurück
        </Button>
        <Button
          disabled={!(isValid && dirty)}
          type="submit"
          className={styles.stepFourBtn}
        >
          Absenden
        </Button>
      </div>
    </form>
  );
};

export default LeadStepFourForm;

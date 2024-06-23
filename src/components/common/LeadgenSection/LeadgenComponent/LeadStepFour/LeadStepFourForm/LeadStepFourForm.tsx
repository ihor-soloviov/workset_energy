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

    resetForm,
  } = useFormik({
    initialValues: {
      userPostcode: '',
      userEmail: '',

      userMessage: '',
    },
    validationSchema: Yup.object({
      userPostcode: Yup.string(),
      userEmail: Yup.string().email('Invalid email address'),

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
          PLZ
          <input
            placeholder="PLZ"
            className={styles.stepFourInput}
            {...getFieldProps('userPostcode')}
          />
        </label>

        <label className={styles.stepFourLabel}>
          E-Mail
          <input
            placeholder="E-Mail"
            className={styles.stepFourInput}
            {...getFieldProps('userEmail')}
          />
        </label>
      </div>
      <label className={styles.stepFourLabel}>
        Nachricht
        <textarea
          placeholder="Nachricht"
          className={styles.stepFourTextArea}
          {...getFieldProps('userMessage')}
        ></textarea>
      </label>

      <Button type="submit" className={styles.stepFourBtn}>
        Absenden
      </Button>
    </form>
  );
};

export default LeadStepFourForm;

import styles from './LeadStepSixForm.module.css';
import Button from '@/components/common/Button/Button';
import LeadIcon from '/public/icons/lead-btn-arrow.svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { interTight, inter } from '@/utils/fonts';
import { LeadStepProps } from '../../types';

const LeadStepSixForm = ({
  formData,
  setFormData,
  step,
  setStep,
}: LeadStepProps) => {
  const { handleSubmit, errors, touched, getFieldProps, isValid, dirty } =
    useFormik({
      initialValues: {
        postcode: '',
        location: '',
        street: '',
        houseNumber: '',
      },
      validationSchema: Yup.object({
        postcode: Yup.string().required('Required'),
        location: Yup.string().required('Required'),
        street: Yup.string().required('Required'),
        houseNumber: Yup.string().required('Required'),
      }),
      onSubmit: values => {
        setFormData({ ...formData, pvPlanForm: values });
        setStep(step + 1);
      },
    });

  return (
    <form
      className={`${styles.stepSixForm} ${inter.className}`}
      onSubmit={handleSubmit}
    >
      <label className={styles.stepSixLabel}>
        PLZ*
        <input
          placeholder="PLZ"
          className={`${styles.stepSixInput} ${touched.postcode && errors.postcode && styles.error}`}
          {...getFieldProps('postcode')}
        />
        {touched.postcode && errors.postcode && (
          <p className={styles.errorText}>{errors.postcode}</p>
        )}
      </label>
      <label className={styles.stepSixLabel}>
        Ort*
        <input
          placeholder="Ort"
          className={`${styles.stepSixInput} ${touched.location && errors.location && styles.error}`}
          {...getFieldProps('location')}
        />
        {touched.location && errors.location && (
          <p className={styles.errorText}>{errors.location}</p>
        )}
      </label>
      <label className={styles.stepSixLabel}>
        Straße*
        <input
          placeholder="Straße"
          className={`${styles.stepSixInput} ${touched.street && errors.street && styles.error}`}
          {...getFieldProps('street')}
        />
        {touched.street && errors.street && (
          <p className={styles.errorText}>{errors.street}</p>
        )}
      </label>
      <label className={styles.stepSixLabel}>
        Hausnummer*
        <input
          placeholder="Hausnummer"
          className={`${styles.stepSixInput} ${touched.houseNumber && errors.houseNumber && styles.error}`}
          {...getFieldProps('houseNumber')}
        />
        {touched.houseNumber && errors.houseNumber && (
          <p className={styles.errorText}>{errors.houseNumber}</p>
        )}
      </label>
      <Button
        className={`${styles.leadStepSixBtn} ${interTight.className}`}
        disabled={!(isValid && dirty)}
        type="submit"
      >
        Weiter
      </Button>

      <Button
        className={`${styles.leadStepSixBtnDesc} ${interTight.className}`}
        disabled={!(isValid && dirty)}
        type="submit"
      >
        Weiter
        <LeadIcon className={styles.leadIcon} />
      </Button>
    </form>
  );
};

export default LeadStepSixForm;

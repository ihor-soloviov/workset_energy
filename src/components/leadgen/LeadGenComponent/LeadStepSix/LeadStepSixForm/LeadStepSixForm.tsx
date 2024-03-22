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
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      plz: '',
      ort: '',
      straße: '',
      housnummer: '',
    },
    validationSchema: Yup.object({
      plz: Yup.string().required('Required'),
      ort: Yup.string().required('Required'),
      straße: Yup.string().required('Required'),
      housnummer: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      console.log(values);
      setFormData({ ...formData, stepSix: values });
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
          className={`${styles.stepSixInput} ${touched.plz && errors.plz && styles.error}`}
          {...getFieldProps('plz')}
        />
        {touched.plz && errors.plz && (
          <p className={styles.errorText}>{errors.plz}</p>
        )}
      </label>
      <label className={styles.stepSixLabel}>
        Ort*
        <input
          placeholder="Ort"
          className={`${styles.stepSixInput} ${touched.ort && errors.ort && styles.error}`}
          {...getFieldProps('ort')}
        />
        {touched.ort && errors.ort && (
          <p className={styles.errorText}>{errors.ort}</p>
        )}
      </label>
      <label className={styles.stepSixLabel}>
        Straße*
        <input
          placeholder="Straße"
          className={`${styles.stepSixInput} ${touched.straße && errors.straße && styles.error}`}
          {...getFieldProps('straße')}
        />
        {touched.straße && errors.straße && (
          <p className={styles.errorText}>{errors.straße}</p>
        )}
      </label>
      <label className={styles.stepSixLabel}>
        Housnummer*
        <input
          placeholder="Housnummer"
          className={`${styles.stepSixInput} ${touched.housnummer && errors.housnummer && styles.error}`}
          {...getFieldProps('housnummer')}
        />
        {touched.housnummer && errors.housnummer && (
          <p className={styles.errorText}>{errors.housnummer}</p>
        )}
      </label>
      <Button
        className={`${styles.leadStepSixBtn} ${interTight.className}`}
        // disabled={isDisabledBtn}

        type="submit"
      >
        Weiter
      </Button>

      <Button
        className={`${styles.leadStepSixBtnDesc} ${interTight.className}`}
        // disabled={isDisabledBtn}
        type="submit"
      >
        Weiter
        <LeadIcon className={styles.leadIcon} />
      </Button>
    </form>
  );
};

export default LeadStepSixForm;

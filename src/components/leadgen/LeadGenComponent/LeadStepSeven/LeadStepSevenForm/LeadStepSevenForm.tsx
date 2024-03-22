import styles from './LeadStepSevenForm.module.css';
import Button from '@/components/common/Button/Button';
import LeadIcon from '/public/icons/lead-btn-arrow.svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { interTight, inter } from '@/utils/fonts';
import { LeadStepProps } from '../../types';

const LeadStepSevenForm = ({
  formData,
  setFormData,
  step,
  setStep,
}: LeadStepProps) => {
  const { handleSubmit, errors, touched, getFieldProps, isValid, dirty } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        telefonnummer: '',
        message: '',
      },
      validationSchema: Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        telefonnummer: Yup.number()
          .typeError('Invalid number')
          .required('Required'),
        message: Yup.string(),
      }),
      onSubmit: values => {
        console.log(values);

        setFormData({ ...formData, stepSeven: values });
        setStep(step + 1);
      },
    });
  return (
    <form
      className={`${styles.stepSevenForm} ${inter.className}`}
      onSubmit={handleSubmit}
    >
      <label className={styles.stepSevenLabel}>
        Ihr Name, Nachname*
        <input
          placeholder="Ihr Name, Nachname"
          className={`${styles.stepSevenInput} ${touched.name && errors.name && styles.error}`}
          {...getFieldProps('name')}
        />
        {touched.name && errors.name && (
          <p className={styles.errorText}>{errors.name}</p>
        )}
      </label>
      <div className={styles.stepSevenLabelWrap}>
        <label className={styles.stepSevenLabel}>
          E-mail*
          <input
            placeholder="E-mail"
            className={`${styles.stepSevenInput} ${touched.email && errors.email && styles.error}`}
            {...getFieldProps('email')}
          />
          {touched.email && errors.email && (
            <p className={styles.errorText}>{errors.email}</p>
          )}
        </label>
        <label className={styles.stepSevenLabel}>
          Telefonnummer*
          <input
            placeholder="Telefonnummer"
            className={`${styles.stepSevenInput} ${touched.telefonnummer && errors.telefonnummer && styles.error}`}
            {...getFieldProps('telefonnummer')}
          />
          {touched.telefonnummer && errors.telefonnummer && (
            <p className={styles.errorText}>{errors.telefonnummer}</p>
          )}
        </label>
      </div>
      <label className={styles.stepSevenLabel}>
        Wann kann man dich am Besten erreichen?
        <input
          placeholder="Wann kann man dich am Besten erreichen?"
          className={styles.stepSevenInput}
          {...getFieldProps('message')}
        />
      </label>
      <Button
        disabled={!(isValid && dirty)}
        className={`${styles.leadStepSevenBtn} ${interTight.className}`}
        type="submit"
      >
        Weiter
      </Button>

      <Button
        disabled={!(isValid && dirty)}
        className={`${styles.leadStepSevenBtnDesc} ${interTight.className}`}
        type="submit"
      >
        Weiter
        <LeadIcon className={styles.leadIcon} />
      </Button>
    </form>
  );
};

export default LeadStepSevenForm;

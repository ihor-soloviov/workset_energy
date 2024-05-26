'use client';

import styles from './LeadStepSixForm.module.css';
import Button from '@/components/common/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { interTight, inter } from '@/utils/fonts';

const LeadStepSixForm = () => {
  const { handleSubmit, errors, touched, getFieldProps, isValid, dirty } =
    useFormik({
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
        userPhone: Yup.number()
          .typeError('Invalid number')
          .required('Required'),

        userStreet: Yup.string().required('Required'),
        userPostcode: Yup.string().required('Required'),
      }),
      onSubmit: values => {
        console.log(values);
      },
    });

  return (
    <form
      className={`${styles.stepSixForm} ${inter.className}`}
      onSubmit={handleSubmit}
    >
      <label className={styles.stepSixLabel}>
        Vorname*
        <input
          placeholder="Vorname"
          className={`${styles.stepSixInput} ${touched.userFirstName && errors.userFirstName && styles.error}`}
          {...getFieldProps('userFirstName')}
        />
        {touched.userFirstName && errors.userFirstName && (
          <p className={styles.errorText}>{errors.userFirstName}</p>
        )}
      </label>

      <label className={styles.stepSixLabel}>
        Nachname*
        <input
          placeholder="Nachname"
          className={`${styles.stepSixInput} ${touched.userLastName && errors.userLastName && styles.error}`}
          {...getFieldProps('userLastName')}
        />
        {touched.userLastName && errors.userLastName && (
          <p className={styles.errorText}>{errors.userLastName}</p>
        )}
      </label>

      <label className={styles.stepSixLabel}>
        E-Mail*
        <input
          placeholder="E-Mail"
          className={`${styles.stepSixInput} ${touched.userEmail && errors.userEmail && styles.error}`}
          {...getFieldProps('userEmail')}
        />
        {touched.userEmail && errors.userEmail && (
          <p className={styles.errorText}>{errors.userEmail}</p>
        )}
      </label>

      <label className={styles.stepSixLabel}>
        Telefon-Nr.*
        <input
          placeholder="Telefon-Nr."
          className={`${styles.stepSixInput} ${touched.userPhone && errors.userPhone && styles.error}`}
          {...getFieldProps('userPhone')}
        />
        {touched.userPhone && errors.userPhone && (
          <p className={styles.errorText}>{errors.userPhone}</p>
        )}
      </label>
      <label className={styles.stepSixLabel}>
        Straße der Projektadresse*
        <input
          placeholder="Straße der Projektadresse"
          className={`${styles.stepSixInput} ${touched.userStreet && errors.userStreet && styles.error}`}
          {...getFieldProps('userStreet')}
        />
        {touched.userStreet && errors.userStreet && (
          <p className={styles.errorText}>{errors.userStreet}</p>
        )}
      </label>
      <label className={styles.stepSixLabel}>
        PLZ und Stadt der Projektadresse*
        <input
          placeholder="PLZ und Stadt der Projektadresse"
          className={`${styles.stepSixInput} ${touched.userPostcode && errors.userPostcode && styles.error}`}
          {...getFieldProps('userPostcode')}
        />
        {touched.userPostcode && errors.userPostcode && (
          <p className={styles.errorText}>{errors.userPostcode}</p>
        )}
      </label>

      <div className={`${styles.stepSixBtnWrap} ${interTight.className}`}>
        <Button type="button" className={styles.stepSixBtn}>
          Züruck
        </Button>
        <Button
          disabled={!(isValid && dirty)}
          type="submit"
          className={styles.stepSixBtn}
        >
          Weiter
        </Button>
      </div>
    </form>
  );
};

export default LeadStepSixForm;

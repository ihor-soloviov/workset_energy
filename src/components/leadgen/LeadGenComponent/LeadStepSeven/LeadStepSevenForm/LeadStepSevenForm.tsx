import styles from './LeadStepSevenForm.module.css';
import Button from '@/components/common/Button/Button';
import LeadIcon from '/public/icons/lead-btn-arrow.svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { interTight, inter } from '@/utils/fonts';
import { LeadStepProps } from '../../types';
import { formDataPost } from '@/utils/api';
import { ThreeDots } from 'react-loader-spinner';
import { useState } from 'react';
import { useGlobalStore } from '@/store/global-store';

const LeadStepSevenForm = ({
  formData,
  setFormData,
  step,
  setStep,
}: LeadStepProps) => {
  const { setPopupAction } = useGlobalStore();
  const [isLoading, setIsLoading] = useState(false);

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
      userEmail: '',
      userPhone: '',
      userComment: '',
    },
    validationSchema: Yup.object({
      userName: Yup.string().required('Required'),
      userEmail: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      userPhone: Yup.number().typeError('Invalid number').required('Required'),
      userComment: Yup.string(),
    }),
    onSubmit: async values => {
      setIsLoading(true);
      console.log(values);

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

      await formDataPost(leadGenData, 'leadgen', setPopupAction);

      setIsLoading(false);
      resetForm();
      setStep(step + 1);
    },
  });
  return (
    <form
      className={`${styles.stepSevenForm} ${inter.className}`}
      onSubmit={handleSubmit}
    >
      <label className={styles.stepSevenLabel}>
        Vor- und Nachname*
        <input
          placeholder="Vor- und Nachname"
          className={`${styles.stepSevenInput} ${touched.userName && errors.userName && styles.error}`}
          {...getFieldProps('userName')}
        />
        {touched.userName && errors.userName && (
          <p className={styles.errorText}>{errors.userName}</p>
        )}
      </label>
      <div className={styles.stepSevenLabelWrap}>
        <label className={styles.stepSevenLabel}>
          E-mail*
          <input
            placeholder="E-mail"
            className={`${styles.stepSevenInput} ${touched.userEmail && errors.userEmail && styles.error}`}
            {...getFieldProps('userEmail')}
          />
          {touched.userEmail && errors.userEmail && (
            <p className={styles.errorText}>{errors.userEmail}</p>
          )}
        </label>
        <label className={styles.stepSevenLabel}>
          Telefonnummer*
          <input
            placeholder="Telefonnummer"
            className={`${styles.stepSevenInput} ${touched.userPhone && errors.userPhone && styles.error}`}
            {...getFieldProps('userPhone')}
          />
          {touched.userPhone && errors.userPhone && (
            <p className={styles.errorText}>{errors.userPhone}</p>
          )}
        </label>
      </div>
      <label className={styles.stepSevenLabel}>
        Wann kann man dich am Besten erreichen?
        <input
          placeholder="Wann kann man dich am Besten erreichen?"
          className={styles.stepSevenInput}
          {...getFieldProps('userComment')}
        />
      </label>
      <Button
        disabled={!(isValid && dirty)}
        className={`${styles.leadStepSevenBtn} ${interTight.className}`}
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
          'Weiter'
        )}
      </Button>

      <Button
        disabled={!(isValid && dirty)}
        className={`${styles.leadStepSevenBtnDesc} ${interTight.className}`}
        type="submit"
      >
        {isLoading ? (
          <ThreeDots
            visible={true}
            height="50"
            width="50"
            color="#f32c40"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass={styles.loader}
          />
        ) : (
          <>
            Weiter
            <LeadIcon className={styles.leadIcon} />
          </>
        )}
      </Button>
    </form>
  );
};

export default LeadStepSevenForm;

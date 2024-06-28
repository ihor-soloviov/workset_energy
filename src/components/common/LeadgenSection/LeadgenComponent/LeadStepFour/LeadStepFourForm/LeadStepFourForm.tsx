import styles from './LeadStepFourForm.module.css';
import Button from '@/components/common/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { interTight, inter } from '@/utils/fonts';
import { LeadFormProps } from '../../../types';
import { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useGlobalStore } from '@/store/global-store';
import { leadgenExtraFormDataPost } from '@/utils/api';

const LeadStepFourForm = ({
  step,
  setStep,
  leadId,
  leadMainWrapRef,
}: LeadFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { setPopupAction } = useGlobalStore();
  const {
    handleSubmit,
    getFieldProps,
    errors,
    isValid,
    dirty,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      userPostcode: '',
      userEmail: '',
      userMessage: '',
    },
    validationSchema: Yup.object({
      userPostcode: Yup.string()
        .matches(/^[0-9]+$/, 'Must be only digits')
        .min(5, 'Must be exactly 5 digits')
        .max(5, 'Must be exactly 5 digits'),

      userEmail: Yup.string().email('Invalid email address'),

      userMessage: Yup.string(),
    }),
    onSubmit: async values => {
      setIsLoading(true);

      const leadGenData = new FormData();
      const leadGenExtraData = { extraContactData: values };

      Object.entries(leadGenExtraData).forEach(([key, value]) => {
        leadGenData.append(key, JSON.stringify(value));
      });

      leadId &&
        (await leadgenExtraFormDataPost(
          leadGenData,
          leadId,
          'leadgen',
          setPopupAction,
        ));

      setIsLoading(false);
      resetForm();
      setStep(step + 1);
    },
  });

  const scrollToTop = () => {
    if (leadMainWrapRef?.current) {
      leadMainWrapRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', scrollToTop);
    });

    return () => {
      inputs.forEach(input => {
        input.removeEventListener('blur', scrollToTop);
      });
    };
  }, []);

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
            className={`${styles.stepFourInput} ${touched.userPostcode && errors.userPostcode && styles.error}`}
            {...getFieldProps('userPostcode')}
          />
          {touched.userPostcode && errors.userPostcode && (
            <p className={styles.errorText}>{errors.userPostcode}</p>
          )}
        </label>

        <label className={styles.stepFourLabel}>
          E-Mail
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
        Nachricht
        <textarea
          placeholder="Nachricht"
          className={styles.stepFourTextArea}
          {...getFieldProps('userMessage')}
        ></textarea>
      </label>

      <Button
        type="submit"
        className={`${styles.stepFourBtn} ${interTight.className}`}
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
          'Absenden'
        )}
      </Button>
    </form>
  );
};

export default LeadStepFourForm;

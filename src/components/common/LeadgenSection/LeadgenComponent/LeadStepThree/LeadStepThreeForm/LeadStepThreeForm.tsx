'use client';

import styles from './LeadStepThreeForm.module.css';
import Button from '@/components/common/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { interTight, inter } from '@/utils/fonts';
import { LeadFormProps } from '../../../types';
import { useState } from 'react';
import { leadgenFormDataPost } from '@/utils/api';
import { useGlobalStore } from '@/store/global-store';
import { ThreeDots } from 'react-loader-spinner';

const LeadStepThreeForm = ({
  formData,
  step,
  setStep,
  handlePrevStepClick,
  setUserToken,
}: LeadFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { setPopupAction } = useGlobalStore();
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
      setIsLoading(true);

      const leadGenData = new FormData();
      const leadGenFinalData = { ...formData, contactData: values };
      Object.entries(leadGenFinalData).forEach(([key, value]) => {
        if (typeof value === 'object' && !Array.isArray(value)) {
          leadGenData.append(key, JSON.stringify(value));
        }
        if (Array.isArray(value)) {
          leadGenData.append(key, value.join(','));
        } else {
          leadGenData.append(key, value.toString());
        }
      });

      console.log('leadGenFinalData', leadGenFinalData);

      const response = await leadgenFormDataPost(
        leadGenData,
        'leadgen',
        setPopupAction,
      );
      setUserToken && response?.data.token && setUserToken(response.data.token);
      setIsLoading(false);
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
      </div>
    </form>
  );
};

export default LeadStepThreeForm;

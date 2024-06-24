import styles from './LeadStepFourForm.module.css';
import Button from '@/components/common/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { interTight, inter } from '@/utils/fonts';
import { LeadFormProps } from '../../../types';
import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useGlobalStore } from '@/store/global-store';
import { leadgenExtraFormDataPost } from '@/utils/api';

const LeadStepFourForm = ({ step, setStep, leadId }: LeadFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { setPopupAction } = useGlobalStore();
  const {
    handleSubmit,
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
      userEmail: Yup.string(),

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

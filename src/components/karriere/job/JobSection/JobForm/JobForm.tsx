'use client';

import styles from './JobForm.module.css';
import { useFormik } from 'formik';
import { inter } from '@/utils/fonts';
import { interTight } from '@/utils/fonts';
import * as Yup from 'yup';
import Button from '@/components/common/Button/Button';
import { useState, ChangeEvent } from 'react';
import { formDataPost } from '@/utils/api';
import { ThreeDots } from 'react-loader-spinner';
import { useGlobalStore } from '@/store/global-store';
import { useNavigateTo } from '@/hooks/useNavigationToThanks';
import { Navigate } from '@/types/navigate';

const JobForm = () => {
  const { setPopupAction } = useGlobalStore();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };
  const thankYou = useNavigateTo(Navigate.thanks);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file);
    }
  };

  const {
    handleSubmit,
    errors,
    touched,
    getFieldProps,
    resetForm,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      name: '',

      tel: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),

      tel: Yup.number().typeError('Invalid number').required('Required'),
    }),
    onSubmit: async ({ name, tel }) => {
      if (selectedFile) {
        setIsLoading(true);
        const formData = new FormData();
        const formDataFields = {
          userName: name,

          userPhone: tel,
        };

        Object.entries(formDataFields).forEach(([key, value]) => {
          formData.append(key, value);
        });

        formData.append('file', selectedFile);

        await formDataPost(formData, 'cv', setPopupAction);

        setIsLoading(false);
        setSelectedFile(null);
        resetForm();
        thankYou();
      }
    },
  });
  return (
    <div className={styles.jobFormWrap}>
      <h2 className={styles.jobFormTitle}>
        Sie haben keine passende Stelle gefunden?
      </h2>
      <p className={`${styles.jobFormText} ${inter.className}`}>
        Schicken Sie uns Ihren Lebenslauf, vielleicht suchen wir ja nach Ihnen!
      </p>
      <form
        onSubmit={handleSubmit}
        className={`${styles.jobForm} ${inter.className}`}
      >
        <div className={styles.jobLabelWrap}>
          <label className={styles.jobLabel}>
            Name, Nachname*
            <input
              placeholder="Name, Nachname"
              className={`${styles.jobInput} ${touched.name && errors.name && styles.error}`}
              {...getFieldProps('name')}
            />
            {touched.name && errors.name && (
              <p className={styles.errorText}>{errors.name}</p>
            )}
          </label>

          <label className={styles.jobLabel}>
            Telefon-Nr.*
            <input
              placeholder="Telefon-Nr."
              className={`${styles.jobInput} ${touched.tel && errors.tel && styles.error}`}
              {...getFieldProps('tel')}
            />
            {touched.tel && errors.tel && (
              <p className={styles.errorText}>{errors.tel}</p>
            )}
          </label>

          <label className={styles.jobLabel}>
            Zusammenfassung*
            <p
              className={`${styles.jobFilePlaceholderMob} ${selectedFile ? styles.withFile : ''}`}
            >
              {selectedFile
                ? truncateText(selectedFile.name, 23)
                : `Keine Datei gewählt`}
            </p>
            <p
              className={`${styles.jobFilePlaceholderDesc} ${selectedFile ? styles.withFile : ''}`}
            >
              {selectedFile
                ? truncateText(selectedFile.name, 47)
                : `Keine Datei gewählt`}
            </p>
            <input
              id="cv"
              type="file"
              accept=".pdf,pdf/a,.doc,.docx,.png,.jpg,.xlm,.xls,.pdg"
              placeholder="Keine Datei gewählt"
              className={styles.jobInputFile}
              onChange={handleFileChange}
            />
            <label
              htmlFor="cv"
              className={`${styles.jobUploadBtn} ${selectedFile ? styles.withFile : ''}`}
            >
              Upload
            </label>
          </label>
        </div>

        <Button
          disabled={!(isValid && dirty && selectedFile)}
          className={`${styles.jobBtn} ${interTight.className}`}
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
            'Absenden'
          )}
        </Button>
      </form>
    </div>
  );
};

export default JobForm;

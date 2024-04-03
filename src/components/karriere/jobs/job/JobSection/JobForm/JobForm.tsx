'use client';

import styles from './JobForm.module.css';
import { useFormik } from 'formik';
import { inter } from '@/utils/fonts';
import { interTight } from '@/utils/fonts';
import * as Yup from 'yup';
import Button from '@/components/common/Button/Button';
import { useState, ChangeEvent } from 'react';
const JobForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file);
    }
  };

  const { handleSubmit, errors, touched, getFieldProps, resetForm } = useFormik(
    {
      initialValues: {
        name: '',

        tel: '',
      },
      validationSchema: Yup.object({
        name: Yup.string().required('Required'),

        tel: Yup.number().typeError('Invalid number').required('Required'),
      }),
      onSubmit: values => {
        console.log({ ...values, angebot: selectedFile });
        resetForm();
        setSelectedFile(null);
      },
    },
  );
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
            <p className={styles.jobFilePlaceholderMob}>
              {selectedFile
                ? truncateText(selectedFile.name, 23)
                : `Keine Datei gewählt`}
            </p>
            <p className={styles.jobFilePlaceholderDesc}>
              {selectedFile
                ? truncateText(selectedFile.name, 47)
                : `Keine Datei gewählt`}
            </p>
            <input
              id="angebot"
              type="file"
              placeholder="Keine Datei gewählt"
              className={styles.jobInputFile}
              onChange={handleFileChange}
            />
            <label htmlFor="angebot" className={styles.jobUploadBtn}>
              Upload
            </label>
          </label>
        </div>

        <Button
          className={`${styles.jobBtn} ${interTight.className}`}
          type="submit"
        >
          Senden
        </Button>
      </form>
    </div>
  );
};

export default JobForm;

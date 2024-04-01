'use client';

import styles from './KarriereForm.module.css';
import { interTight } from '@/utils/fonts';
import { useFormik } from 'formik';
import { inter } from '@/utils/fonts';
import * as Yup from 'yup';
import Button from '@/components/common/Button/Button';
import { useState, ChangeEvent } from 'react';

const KarriereForm = () => {
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
        email: '',
        tel: '',
        message: '',
      },
      validationSchema: Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        tel: Yup.number().typeError('Invalid number').required('Required'),

        message: Yup.string(),
      }),
      onSubmit: values => {
        console.log({ ...values, angebot: selectedFile });
        resetForm();
        setSelectedFile(null);
      },
    },
  );

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.karriereForm} ${inter.className}`}
    >
      <div className={styles.karriereLabelWrap}>
        <label className={styles.karriereLabel}>
          Name, Nachname*
          <input
            placeholder="Name, Nachname"
            className={`${styles.karriereInput} ${touched.name && errors.name && styles.error}`}
            {...getFieldProps('name')}
          />
          {touched.name && errors.name && (
            <p className={styles.errorText}>{errors.name}</p>
          )}
        </label>
        <label className={`${styles.karriereLabel} ${styles.email}`}>
          E-Mail*
          <input
            placeholder="E-Mail"
            className={`${styles.karriereInput} ${touched.email && errors.email && styles.error}`}
            {...getFieldProps('email')}
          />
          {touched.email && errors.email && (
            <p className={styles.errorText}>{errors.email}</p>
          )}
        </label>
      </div>
      <div className={styles.karriereLabelWrap}>
        <label className={styles.karriereLabel}>
          Telefon-Nr.*
          <input
            placeholder="Telefon-Nr."
            className={`${styles.karriereInput} ${touched.tel && errors.tel && styles.error}`}
            {...getFieldProps('tel')}
          />
          {touched.tel && errors.tel && (
            <p className={styles.errorText}>{errors.tel}</p>
          )}
        </label>

        <label className={styles.karriereLabel}>
          Zusammenfassung*
          <p className={styles.karriereFilePlaceholderMob}>
            {selectedFile
              ? truncateText(selectedFile.name, 23)
              : `Keine Datei gewählt`}
          </p>
          <p className={styles.karriereFilePlaceholderDesc}>
            {selectedFile
              ? truncateText(selectedFile.name, 47)
              : `Keine Datei gewählt`}
          </p>
          <input
            id="angebot"
            type="file"
            placeholder="Keine Datei gewählt"
            className={styles.karriereInputFile}
            onChange={handleFileChange}
          />
          <label htmlFor="angebot" className={styles.karriereUploadBtn}>
            Upload
          </label>
        </label>
      </div>
      <label className={styles.karriereLabelTextArea}>
        Nachricht
        <textarea
          placeholder="Nachricht"
          className={styles.karriereTextArea}
          {...getFieldProps('message')}
        />
      </label>
      <div className={styles.karriereBtnWrap}>
        <p className={styles.karriereBtnText}>
          Ihre Anfrage wird in einem sicheren Modus gesendet und bleibt
          vertraulich
        </p>
        <Button
          className={`${styles.karriereBtn} ${interTight.className}`}
          type="submit"
        >
          Senden
        </Button>
      </div>
    </form>
  );
};

export default KarriereForm;

'use client';

import styles from './AngebotForm.module.css';
import { interTight } from '@/utils/fonts';
import { useFormik } from 'formik';
import { inter } from '@/utils/fonts';
import * as Yup from 'yup';
import Button from '@/components/common/Button/Button';
import { useState, ChangeEvent } from 'react';
import { formDataPost } from '@/utils/api';

const AngebotForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const truncateText = (text: string, maxLength: number) =>
    text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file);
    }
  };

  console.log(selectedFile);

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
    onSubmit: async ({ name, email, tel, message }) => {
      if (selectedFile) {
        const formData = new FormData();
        const formDataFields = {
          userName: name,
          userEmail: email,
          userPhone: tel,
          userComment: message,
        };

        Object.entries(formDataFields).forEach(([key, value]) => {
          formData.append(key, value);
        });

        formData.append('file', selectedFile);

        const status = await formDataPost(
          formData,
          'https://mailer.work-set.eu/energyApi/angebot',
        );
        status === 200 && console.log('200');
        resetForm();
        setSelectedFile(null);
      }
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.angebotForm} ${inter.className}`}
    >
      <label className={styles.angebotLabel}>
        Name, Nachname*
        <input
          placeholder="Name, Nachname"
          className={`${styles.angebotInput} ${touched.name && errors.name && styles.error}`}
          {...getFieldProps('name')}
        />
        {touched.name && errors.name && (
          <p className={styles.errorText}>{errors.name}</p>
        )}
      </label>
      <div className={styles.angebotLabelWrap}>
        <label className={`${styles.angebotLabel} ${styles.email}`}>
          E-Mail*
          <input
            placeholder="E-Mail"
            className={`${styles.angebotInput} ${touched.email && errors.email && styles.error}`}
            {...getFieldProps('email')}
          />
          {touched.email && errors.email && (
            <p className={styles.errorText}>{errors.email}</p>
          )}
        </label>
        <label className={styles.angebotLabel}>
          Telefon-Nr.*
          <input
            placeholder="Telefon-Nr."
            className={`${styles.angebotInput} ${touched.tel && errors.tel && styles.error}`}
            {...getFieldProps('tel')}
          />
          {touched.tel && errors.tel && (
            <p className={styles.errorText}>{errors.tel}</p>
          )}
        </label>
      </div>
      <label className={styles.angebotLabel}>
        Wir prüfen dein PV-Angebot*
        <p
          className={`${styles.angebotFilePlaceholderMob} ${selectedFile ? styles.withFile : ''}`}
        >
          {selectedFile
            ? truncateText(selectedFile.name, 23)
            : `Lade dein(e) Angebot(e) hoch`}
        </p>
        <p
          className={`${styles.angebotFilePlaceholderDesc} ${selectedFile ? styles.withFile : ''}`}
        >
          {selectedFile
            ? truncateText(selectedFile.name, 47)
            : `Lade dein(e) Angebot(e) hoch`}
        </p>
        <input
          id="angebot"
          type="file"
          accept=".pdf,.doc,.docx"
          required
          placeholder="Lade dein(e) Angebot(e) hoch"
          className={styles.angebotInputFile}
          onChange={handleFileChange}
        />
        <label
          htmlFor="angebot"
          className={`${styles.angebotUploadBtn} ${selectedFile ? styles.withFile : ''}`}
        >
          Upload
        </label>
      </label>
      <label className={styles.angebotLabelTextArea}>
        Hast du uns was Wichtiges mitzuteilen?
        <textarea
          placeholder="Schreib uns einfach"
          className={styles.angebotTextArea}
          {...getFieldProps('message')}
        />
      </label>
      <div className={styles.angebotBtnWrap}>
        <p className={styles.angebotText}>
          SSL Verschüsselte Nachricht.
          <br className={styles.angebotBr} /> Vielen Dank für deine Nachricht!
        </p>
        <Button
          disabled={!(isValid && dirty && selectedFile)}
          className={`${styles.angebotBtn} ${interTight.className}`}
          type="submit"
        >
          Senden
        </Button>
      </div>
    </form>
  );
};

export default AngebotForm;

'use client';

import Button from '../Button/Button';
import styles from './SendEmailSection.module.css';
import { inter } from '@/utils/fonts';
import CheckIcon from '/public/icons/check.svg';
import { useState, FormEvent, ChangeEvent } from 'react';

type AmenitiesItem = {
  text: string;
};

type FormInitialValue = {
  email: string;
};

const SendEmailSection = () => {
  const amenitiesItems: AmenitiesItem[] = [
    { text: '0% Risiko' },
    { text: '0% Anzahlung' },
    { text: '100% Naturstrom' },
  ];

  const formInitialValue = {
    email: '',
  };

  const [formData, setFormData] = useState<FormInitialValue>(formInitialValue);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, email: e.target.value });

  return (
    <section className={styles.sendEmailSection}>
      <div className={styles.sendEmailContainer}>
        <p className={`${styles.sendEmailTopText} ${inter.className}`}>
          Ihr PV-Fachpartner
        </p>
        <h2 className={styles.sendEmailTitle}>
          Sende uns eine E-Mail und wir melden
          <br className={styles.sendEmailBr} /> uns bei dir
        </h2>
        <form onSubmit={handleFormSubmit} className={styles.sendEmailForm}>
          <input
            onChange={handleInputChange}
            value={formData.email}
            name="email"
            placeholder="Deine E-Mail-Kontaktadresse"
            className={`${styles.sendEmailInput} ${inter.className}`}
          />
          <Button className={styles.sendEmailBtn} type="submit">
            Senden
          </Button>
        </form>
        <ul className={`${styles.sendEmailList} ${inter.className}`}>
          {amenitiesItems.map(({ text }) => (
            <li className={styles.sendEmailItem} key={text}>
              <div className={styles.sendEmailIconWrap}>
                <CheckIcon className={styles.sendEmailIcon} />
              </div>
              <p className={styles.sendEmailText}>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SendEmailSection;

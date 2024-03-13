import React from 'react';
import styles from './SendEmailSection.module.css';
import { inter } from '@/utils/fonts';
import CheckIcon from '/public/icons/check.svg';
import SendEmailForm from './SendEmailForm/SendEmailForm';

type AmenitiesItem = {
  text: string;
};

const SendEmailSection = () => {
  const amenitiesItems: AmenitiesItem[] = [
    { text: '0% Risiko' },
    { text: '0% Anzahlung' },
    { text: '100% Naturstrom' },
  ];

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
        <SendEmailForm />
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

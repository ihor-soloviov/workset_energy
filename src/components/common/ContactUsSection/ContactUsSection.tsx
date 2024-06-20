'use client';

import dynamic from 'next/dynamic';

const RecycleTextWrap = dynamic(
  () => import('../RecycleTextWrap/RecycleTextWrap'),
  {
    ssr: false,
  },
);
const ContactUsForm = dynamic(() => import('./ContactUsForm/ContactUsForm'));

const ContactUsMap = dynamic(() => import('./ContactUsMap/ContactUsMap'));

import styles from './ContactUsSection.module.css';
import { inter } from '@/utils/fonts';
import Container from '../Container/Container';
import { useGlobalStore } from '@/store/global-store';

const ContactUsSection = () => {
  const { isDesktop } = useGlobalStore();

  return (
    <section
      id={isDesktop ? 'kontact' : ''}
      className={styles.contactUsSection}
    >
      <Container>
        <div className={styles.contactUsMainWrap}>
          <ContactUsMap />
          <div
            id={!isDesktop ? 'kontact' : ''}
            className={styles.contactUsFormWrap}
          >
            <RecycleTextWrap
              title="Jetzt Angebot erhalten"
              titleClass={styles.contactUsMainTitle}
              text="Fülle die untenstehenden Felder aus und wir rufen dich an."
              textClass={`${styles.contactUsText} ${inter.className}`}
            />
            <ContactUsForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUsSection;

import styles from './ContactUsSection.module.css';
import { inter } from '@/utils/fonts';
import Container from '../Container/Container';
import ContactUsForm from './ContactUsForm/ContactUsForm';
import ContactUsMap from './ContactUsMap/ContactUsMap';
import RecycleTextWrap from '../RecycleTextWrap/RecycleTextWrap';

const ContactUsSection = () => {
  return (
    <section id="contact" className={styles.contactUsSection}>
      <Container>
        <div className={styles.contactUsMainWrap}>
          <ContactUsMap />
          <div className={styles.contactUsFormWrap}>
            <RecycleTextWrap
              title="Kontaktiere uns"
              titleClass={styles.contactUsMainTitle}
              text="Bitte fülle das untenstehende Formular aus und wir werden uns in
              Kürze mit dir in Verbindung setzen"
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

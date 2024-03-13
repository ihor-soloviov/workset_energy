import styles from './ContactUsSection.module.css';
import { inter } from '@/utils/fonts';
import Container from '../Container/Container';
import ContactUsForm from './ContactUsForm/ContactUsForm';
import ContactUsMap from './ContactUsMap/ContactUsMap';

const ContactUsSection = () => {
  return (
    <section className={styles.contactUsSection}>
      <Container>
        <div className={styles.contactUsMainWrap}>
          <ContactUsMap />
          <div className={styles.contactUsFormWrap}>
            <h2 className={styles.contactUsMainTitle}>Kontaktiere uns</h2>
            <p className={`${styles.contactUsText} ${inter.className}`}>
              Bitte fülle das untenstehende Formular aus und wir werden uns in
              Kürze mit dir in Verbindung setzen
            </p>
            <ContactUsForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUsSection;

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
              title="Jetzt Angebot erhalten"
              titleClass={styles.contactUsMainTitle}
              text="Fülle die untenstehenden Felder aus und wir rufen dich an"
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

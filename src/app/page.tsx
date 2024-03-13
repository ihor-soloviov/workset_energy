import ContactUsSection from '@/components/common/ContactUsSection/ContactUsSection';
import styles from './page.module.css';
import SendEmailSection from '@/components/common/SendEmailSection/SendEmailSection';
import GoogleComSection from '@/components/common/GoogleComSection/GoogleComSection';

const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <ContactUsSection />
      <SendEmailSection />
      <GoogleComSection />
    </>
  );
};

export default HomePage;

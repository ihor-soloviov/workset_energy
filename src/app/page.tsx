import ContactUsSection from '@/components/common/ContactUsSection/ContactUsSection';
import styles from './page.module.css';
import SendEmailSection from '@/components/common/SendEmailSection/SendEmailSection';
import GoogleComSection from '@/components/common/GoogleComSection/GoogleComSection';
import TeamSection from '@/components/common/TeamSection/TeamSection';

const HomePage = () => {
  return (
    <>
      {/* <div>HomePage</div> */}
      <TeamSection />
      <ContactUsSection />
      <SendEmailSection />
      <GoogleComSection />
    </>
  );
};

export default HomePage;

import ContactUsSection from '@/components/common/ContactUsSection/ContactUsSection';
import styles from './page.module.css';
import SendEmailSection from '@/components/common/SendEmailSection/SendEmailSection';
import GoogleComSection from '@/components/common/GoogleComSection/GoogleComSection';
import TeamSection from '@/components/common/TeamSection/TeamSection';
import VideoSection from '@/components/common/VideoSection/VideoSection';
import { firstVideo, secondVideo } from '@/utils/video';
const HomePage = () => {
  return (
    <>
      {/* <div>HomePage</div> */}
      <VideoSection {...firstVideo} />
      <TeamSection />
      <ContactUsSection />
      <SendEmailSection />
      <GoogleComSection />
    </>
  );
};

export default HomePage;

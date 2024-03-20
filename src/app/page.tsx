import ContactUsSection from '@/components/common/ContactUsSection/ContactUsSection';
import styles from './page.module.css';
import SendEmailSection from '@/components/common/SendEmailSection/SendEmailSection';
import GoogleComSection from '@/components/common/GoogleComSection/GoogleComSection';
import TeamSection from '@/components/common/TeamSection/TeamSection';
import VideoSection from '@/components/common/VideoSection/VideoSection';
import { firstVideo, secondVideo } from '@/utils/video';
import QuestionSection from '@/components/home/QuestionSection/QuestionSection';
import AngebotSection from '@/components/home/AngebotSection/AngebotSection';
import ProductSection from '@/components/home/ProductSection/ProductSection';
import AmenitiesSection from '@/components/home/AmenitiesSection/AmenitiesSection';
import StepSection from '@/components/home/StepSection/StepSection';
import VisionSection from '@/components/common/VisionSection/VisionSection';
import EmployeeSection from '@/components/common/EmployeeSection/EmployeeSection';

const HomePage = () => {
  return (
    <>
      <EmployeeSection />
      <VisionSection />
      <AngebotSection />
      {/* <VideoSection {...firstVideo} /> */}
      <ProductSection />
      {/* <VideoSection {...secondVideo} /> */}
      <TeamSection />
      <AmenitiesSection />

      <QuestionSection />
      <GoogleComSection />

      <StepSection />
      {/* <SendEmailSection /> */}
      <ContactUsSection />
    </>
  );
};

export default HomePage;

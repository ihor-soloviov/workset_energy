import styles from './page.module.css';
import ContactUsSection from '@/components/common/ContactUsSection/ContactUsSection';
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
import HeroSection from '@/components/common/HeroSection/HeroSection';

const HomePage = () => {
  return (
    <>
      <HeroSection
        imgMob="/images/home-hero-mob.jpg"
        title="Dein Fachpartner WorkSET Energy"
        text="Gemeinsam machen wir die Welt etwas grüner und Sie unabhängiger"
        imgDesc="/images/home-hero-desc.jpg"
      />
      <VideoSection {...firstVideo} />
      <ProductSection />
      <VideoSection {...secondVideo} />
      <TeamSection />
      <AmenitiesSection />
      <QuestionSection />
      <GoogleComSection />
      <AngebotSection />
      <VisionSection />
      <ContactUsSection />
      <StepSection />
    </>
  );
};

export default HomePage;
